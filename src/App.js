import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";

import top100Films from "./markers.js";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Autocomplete
          id="combo-box-demo"
          fullWidth
          options={top100Films}
          getOptionLabel={option => option.marker}
          renderInput={params => (
            <TextField
              {...params}
              label="Select a Location"
              variant="outlined"
            />
          )}
          onChange={(event, value) => setLocation(value.marker)}
        />
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
