import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);
    this.state = { hours: "", minutes: "", seconds: "" };
  }
  componentDidMount() {
    this.timer = setInterval(this.updateTime, 1000);
  }

  updateTime() {
    this.setState({
      hours: new Date().getUTCHours(),
      minutes: new Date().getUTCMinutes(),
      seconds: new Date().getUTCSeconds(),
    });
    console.log("hi");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="time-card">
        <p className="timezone">{this.props.timezone}</p>
        <p>
          {hours}:{minutes}:{seconds}
        </p>
        <button
          type="button"
          onClick={() => this.props.removeClock(this.props.timezone)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
