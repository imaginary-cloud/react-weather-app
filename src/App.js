import "./App.css";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import WeatherDisplay from "./WeatherDisplay.js";
import LocationMap from "./Map.js";

function App() {
  const [location, setLocation] = useState([]);

  const prev_latt_long = location
    ? location.latt_long
      ? location.latt_long.split(",")
      : ["38.7223", "-9.1393"]
    : ["38.7223", "-9.1393"];
  const long_latt = [Number(prev_latt_long[1]), Number(prev_latt_long[0])];

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onChange={setLocation}></SearchBar>
        <Grid container spacing={3}>
          {/* map */}
          <Grid item xs={4}>
            <LocationMap
              point={long_latt}
              location={location ? location.title : "You're here"}
            ></LocationMap>
          </Grid>
          {/* weather info */}
          <WeatherDisplay
            woeid={location ? location.woeid : ""}
          ></WeatherDisplay>
        </Grid>
      </header>
    </div>
  );
}

export default App;
