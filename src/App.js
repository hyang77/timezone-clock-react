import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SelectTimezone from "./components/SelectTimezone/SelectTimezone";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Get clocks saved in local storage
    const local = localStorage.getItem("timezones");
    this.state = { timezones: JSON.parse(local), timer: new Date() };
    this.updateTimezoneArray = this.updateTimezoneArray.bind(this);
    this.removeClock = this.removeClock.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.interval = this.updateTime(); // Add interval immediately
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevState) {
    if (this.state.timezones !== prevState.timezones) {
      localStorage.setItem("timezones", JSON.stringify(this.state.timezones));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimezoneArray(newTimezone) {
    this.setState((state) => {
      return { timezones: [...state.timezones, newTimezone] };
    });
  }

  removeClock(item) {
    // Copy array
    const copiedTimezones = [...this.state.timezones];
    // Remove item from array
    copiedTimezones.splice(copiedTimezones.indexOf(item), 1);
    this.setState({ timezones: copiedTimezones });
  }

  updateTime() {
    // Get the current time
    const now = new Date();
    this.setState({ timer: now });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Timezone Clock</h1>
        <SelectTimezone
          timezone={this.state.timezones}
          updateTimezoneArray={this.updateTimezoneArray}
        />
        <div className="card-container">
          {this.state.timezones.map((item) => (
            <Card
              key={item}
              timer={this.state.timer}
              timezone={item}
              removeClock={this.removeClock}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
