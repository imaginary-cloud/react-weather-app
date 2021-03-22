import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WeatherCard from "./WeatherCard";
import FullWeatherCard from "./FullWeatherCard";
import axios from "axios";
import { useQuery } from "react-query";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 40px"
  }
}));

export default function WeatherDisplay() {
  const classes = useStyles();
  const [selectedData, setSelectedData] = useState([]);

  const { data, isLoading, isError, error } = useQuery(
    ["getLocationDetails", "742676"],
    () => {
      return axios
        .get(`http://localhost:8010/proxy/api/location/742676/`)
        .then(({ data } = {}) => {
          setSelectedData(data.consolidated_weather[0]);
          return data;
        });
    }
  );

  if (data && data.consolidated_weather) {
    const weatherdata = data.consolidated_weather.slice(0, 5).map(data => {
      return (
        <WeatherCard
          key={data.id}
          data={data}
          setSelectedData={setSelectedData}
        ></WeatherCard>
      );
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
          <FullWeatherCard selectedData={selectedData}></FullWeatherCard>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        item
        xs={12}
        container
        spacing={3}
        className={classes.root}
        justify="center"
      >
        <Typography variant="h3" component="h3" align="center">
          Loading...
        </Typography>
      </Grid>
    );
  }
}
