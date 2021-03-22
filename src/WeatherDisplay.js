import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WeatherCard from "./WeatherCard";
import data from "./data/example_data_location_request.json";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 40px"
  }
}));

export default function WeatherDisplay() {
  const classes = useStyles();

  const weatherdata = data.consolidated_weather.slice(0, 5).map(data => {
    return <WeatherCard data={data}></WeatherCard>;
  });

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Lisbon
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="space-between">
        {weatherdata}
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
    </Grid>
  );
}
