import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);
    this.state = { hours: "", minutes: "", seconds: "" };
  }

  componentDidMount() {
    this.timer = this.updateTime(); // Add timer immediately
    this.timer = setInterval(this.updateTime, 1000);
  }

  updateTime() {
    // Get the current time
    let now = new Date();
    // Update hours based on the selected timezone
    now.setUTCHours(now.getUTCHours() + parseInt(this.props.timezone));
    this.setState({
      hours: now.getUTCHours(),
      minutes: now.getUTCMinutes(),
      seconds: now.getUTCSeconds(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const { timezone } = this.props;
    return (
      <div className="time-card">
        <p className="timezone">
          {timezone >= 0 ? `UTC+${timezone}` : `UTC${timezone}`}
        </p>
        <p>
          {hours}:{minutes}:{seconds}
        </p>
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
