import logo from "./logo.svg";
import "./App.css";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherDisplay></WeatherDisplay>
      </header>
    </div>
  );
}

export default App;
