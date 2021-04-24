import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.getLocalTime = this.getLocalTime.bind(this);
  }

  getLocalTime() {
    // Get the current time from state
    const timer = this.props.timer;
    // Update hours based on the selected timezone
    timer.setUTCHours(timer.getUTCHours() + parseInt(this.props.timezone));
    return `${timer.getUTCHours()}:${timer.getUTCMinutes()}:${timer.getUTCSeconds()}`;
  }

  render() {
    const { timezone } = this.props;
    return (
      <div className="time-card">
        <p className="timezone">
          {timezone >= 0 ? `UTC+${timezone}` : `UTC${timezone}`}
        </p>
        <p>{this.getLocalTime()}</p>
        <button
          id="delete-button"
          type="button"
          onClick={() => this.props.removeClock(timezone)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
