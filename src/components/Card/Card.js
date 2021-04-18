import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="time-card">
      <p className="timezone">{props.timezone}</p>
      <p>16:00:25</p>
      <button type="button">Delete</button>
    </div>
  );
}

export default Card;
