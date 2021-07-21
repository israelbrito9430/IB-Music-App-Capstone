import React, { useState } from 'react';
import './CommentForm.scss'

const CommentForm = (props) => {

  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="CommentForm">
      <div className="CommentForm__container">
        <div className="CommentForm__form">
          <textarea 
            className="CommentForm__input"
            type="text" 
            placeholder="Write comment here"
            value={comment}
            onChange={handleChange} />
        </div>
      </div>
      <button className="CommentForm__button blueButton" onClick={() => props.handleClick(comment)}>COMMENT</button>
    </div>
  )
}

export default CommentForm;