import React from 'react';
import './CommentForm.scss'

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
  } 

  handleChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handleClick = () => {
    this.props.handleClick(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="CommentForm">
        <div className="CommentForm__container">
          <div className="CommentForm__container__box">
            <textarea 
              className="CommentForm__container__box__input"
              type="text" 
              placeholder="Write comment here"
              value={this.state.value}
              onChange={this.handleChange} />
          </div>
        </div>
        <button className="CommentForm__button blueButton" onClick={this.handleClick}>COMMENT</button>
      </div>
    )
  }
}

export default CommentForm;