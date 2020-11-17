import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import FullWeatherCard from "./FullWeatherCard.js";
import WeatherCard from "./WeatherCard.js";
import data from "./data/example_data_location_request.json";

function WeatherDisplay(props) {
  const [selectedData, setSelectedData] = useState(
    data.consolidated_weather[0]
  );

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
}

export default WeatherDisplay;
