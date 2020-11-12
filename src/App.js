import logo from "./logo.svg";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import SearchBar from "./SearchBar.js";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onChange={setLocation}></SearchBar>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper>xs=4</Paper>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>xs=12</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>xs=12</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
