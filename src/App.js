import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SelectTimezone from "./components/SelectTimezone/SelectTimezone";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timezone: [] };
    this.updateTimezoneArray = this.updateTimezoneArray.bind(this);
  }

  updateTimezoneArray(newTimezone) {
    this.setState((state) => {
      return { timezone: [...state.timezone, newTimezone] };
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Timezone Clock</h1>
        <SelectTimezone
          timezone={this.state.timezone}
          updateTimezoneArray={this.updateTimezoneArray}
        />
        <div className="card-container">
          {this.state.timezone.map((item) => (
            <Card key={item} timezone={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
