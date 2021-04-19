import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SelectTimezone from "./components/SelectTimezone/SelectTimezone";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timezones: [] };
    this.updateTimezoneArray = this.updateTimezoneArray.bind(this);
    this.removeClock = this.removeClock.bind(this);
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
    this.setState({timezones: copiedTimezones})
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
            <Card key={item} timezone={item} removeClock={this.removeClock} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
