import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
  return (
      <FeedbackProvider>
        <BrowserRouter>
              <Header />
              <div className='container'>
                  <Routes>
                    <Route exact path="/" element={<FeedbackPage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                  </Routes>
              </div>
            <AboutIconLink />
        </BrowserRouter>
      </FeedbackProvider>
  );
}

export default App;
