import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import FullWeatherCard from "./FullWeatherCard.js";
import WeatherCard from "./WeatherCard.js";
import data_local from "./data/example_data_location_request.json";
import axios from "axios";
import { useQuery } from "react-query";
import Typography from "@material-ui/core/Typography";

function WeatherDisplay(props) {
  const [selectedData, setSelectedData] = useState([]);

  const { data, isLoading, isError, error } = useQuery(
    ["getLocationDetails", props.woeid],
    () => {
      if (props.woeid) {
        return axios
          .get(`http://localhost:8010/proxy/api/location/${props.woeid}/`)
          .then(({ data } = {}) => {
            setSelectedData(data.consolidated_weather[0]);
            return data;
          });
      } else return [];
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
      <Grid item xs={8}>
        <Grid container spacing={3}>
          {/* cards 5 days */}
          <Grid item xs={12}>
            <Grid container justify="space-between">
              {weatherdata}
            </Grid>
          </Grid>
          {/* info 1 day */}
          <Grid item xs={12}>
            <FullWeatherCard selectedData={selectedData}></FullWeatherCard>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={8}>
        <Grid container spacing={3}>
          {/* cards 5 days */}
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" align="center">
              Please select a location
            </Typography>
          </Grid>
          {/* info 1 day */}
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" align="center">
              Please select a location
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default WeatherDisplay;
