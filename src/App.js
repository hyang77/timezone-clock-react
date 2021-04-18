import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Timezone Clock</h1>
      <div>
        <select name="timezone">
          <option value="utc-12">UTC-12</option>
          <option value="utc-11">UTC-11</option>
          <option value="utc-10">UTC-10</option>
          <option value="utc-9">UTC-9</option>
          <option value="utc-8">UTC-8</option>
          <option value="utc-7">UTC-7</option>
          <option value="utc-6">UTC-6</option>
          <option value="utc-5">UTC-5</option>
          <option value="utc-4">UTC-4</option>
          <option value="utc-3">UTC-3</option>
          <option value="utc-2">UTC-2</option>
          <option value="utc-1">UTC-1</option>
          <option value="utc">UTC</option>
          <option value="utc+1">UTC+1</option>
          <option value="utc+2">UTC+2</option>
          <option value="utc+3">UTC+3</option>
          <option value="utc+4">UTC+4</option>
          <option value="utc+5">UTC+5</option>
          <option value="utc+6">UTC+6</option>
          <option value="utc+7">UTC+7</option>
          <option value="utc+8">UTC+8</option>
          <option value="utc+9">UTC+9</option>
          <option value="utc+10">UTC+10</option>
          <option value="utc+11">UTC+11</option>
          <option value="utc+12">UTC+12</option>
        </select>
        <button type="button">Add</button>
      </div>
      <div className="card-container">
        <div className="time-card">
          <p className="timezone">UTC</p>
          <p>16:00:25</p>
          <button type="button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
