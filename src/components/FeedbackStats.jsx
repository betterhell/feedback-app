import React from 'react';
import PropTypes from "prop-types";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext)

    let averageRatingCaclulate = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    },0) / feedback.length

    averageRatingCaclulate = averageRatingCaclulate.toFixed(1).replace(/[.,]0$/, "")

    return (
        <div className="feedback-stats">
            {feedback.length === 0 ? null : <h4>{feedback.length} Reviews</h4>}
            {feedback.length === 0 ? null : <h4>Average Rating: {averageRatingCaclulate}</h4>}
        </div>
    );
};

FeedbackStats.propTypes = {
    feedback: PropTypes.array
}

export default FeedbackStats;