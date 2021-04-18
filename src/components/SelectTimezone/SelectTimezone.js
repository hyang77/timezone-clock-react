import React from "react";

class SelectTimezone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timezone: "" };
    this.handleTimmezoneChange = this.handleTimmezoneChange.bind(this);
    this.handleAddTimezone = this.handleAddTimezone.bind(this);
  }

  handleTimmezoneChange(e) {
    this.setState({ timezone: e.target.value });
  }

  handleAddTimezone() {
    // console.log(this.state.timezone);
    this.props.updateTimezoneArray(this.state.timezone);
  }

  render() {
    return (
      <div>
        <select name="timezone" onChange={this.handleTimmezoneChange}>
          <option value="-12">UTC-12</option>
          <option value="-11">UTC-11</option>
          <option value="-10">UTC-10</option>
          <option value="-9">UTC-9</option>
          <option value="-8">UTC-8</option>
          <option value="-7">UTC-7</option>
          <option value="-6">UTC-6</option>
          <option value="-5">UTC-5</option>
          <option value="-4">UTC-4</option>
          <option value="-3">UTC-3</option>
          <option value="-2">UTC-2</option>
          <option value="-1">UTC-1</option>
          <option value="0">UTC</option>
          <option value="1">UTC+1</option>
          <option value="2">UTC+2</option>
          <option value="3">UTC+3</option>
          <option value="4">UTC+4</option>
          <option value="5">UTC+5</option>
          <option value="6">UTC+6</option>
          <option value="7">UTC+7</option>
          <option value="8">UTC+8</option>
          <option value="9">UTC+9</option>
          <option value="10">UTC+10</option>
          <option value="11">UTC+11</option>
          <option value="12">UTC+12</option>
        </select>
        <button type="button" onClick={this.handleAddTimezone}>
          Add
        </button>
      </div>
    );
  }
}

export default SelectTimezone;
