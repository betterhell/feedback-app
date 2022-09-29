import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";

const FeedbackPage = () => {
    return (
        <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </>
    );
};

export default FeedbackPage;