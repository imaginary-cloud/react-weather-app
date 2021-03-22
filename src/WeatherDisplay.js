import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WeatherCard from "./WeatherCard";
import data from "./data/example_data_location_request.json";
import FullWeatherCard from "./FullWeatherCard";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 40px"
  }
}));

export default function WeatherDisplay() {
  const classes = useStyles();

  const weatherdata = data.consolidated_weather.slice(0, 5).map(data => {
    return <WeatherCard key={data.id} data={data}></WeatherCard>;
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
        <FullWeatherCard></FullWeatherCard>
      </Grid>
    </Grid>
  );
}
