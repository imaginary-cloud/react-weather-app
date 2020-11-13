import logo from "./logo.svg";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import WeatherCard from "./WeatherCard.js";
import FullWeatherCard from "./FullWeatherCard.js";
import data from "./data/example_data_location_request.json";
import WeatherDisplay from "./WeatherDisplay.js";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onChange={setLocation}></SearchBar>
        <Grid container spacing={3}>
          {/* map */}
          <Grid item xs={4}>
            <Paper>xs=4</Paper>
          </Grid>
          {/* weather info */}
          <WeatherDisplay></WeatherDisplay>
        </Grid>
      </header>
    </div>
  );
}

export default App;
