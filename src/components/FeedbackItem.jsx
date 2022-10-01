import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimesCircle} from "react-icons/fa"
import {BiEdit} from "react-icons/bi"
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
        <button onClick={() => editFeedback(item)} className="edit">
            <BiEdit size={16} color="purple" />
        </button>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimesCircle size={15} color="purple" />
        </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
