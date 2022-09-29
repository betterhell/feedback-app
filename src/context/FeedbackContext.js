import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: uuidv4(),
            text: "This is feedback item 1",
            rating: 7,
        },
        {
            id: uuidv4(),
            text: "This is feedback item 2",
            rating: 4,
        },
        {
            id: uuidv4(),
            text: "This is feedback item 3",
            rating: 10,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
       setFeedbackEdit({
           item,
           edit: true,
       })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure want to delete?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            addFeedback,
            deleteFeedback,
            editFeedback,
            feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext