import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";
import InfoDisplay from "./InfoDisplay";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  icon: {
    height: "150px",
    margin: "20px 0"
  },
  title: {
    margin: 20
  },
  temp: {
    paddingRight: 30
  }
});

export default function FullWeatherCard({ selectedData }) {
  const classes = useStyles();
  const imageLink =
    "https://www.metaweather.com/static/img/weather/png/" +
    selectedData.weather_state_abbr +
    ".png";
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              className={classes.title}
            >
              {Moment(selectedData.applicable_date).format("DD MMMM YYYY")}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={3}
            justify="flex-end"
            alignItems="center"
            className={classes.temp}
          >
            <Typography variant="h2" component="h3" align="right">
              {selectedData.the_temp.toFixed(2)} ºC
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography variant="p" component="p" align="left">
              Max: {selectedData.max_temp.toFixed(2)} ºC
            </Typography>
            <Typography variant="p" component="p" align="left">
              Min: {selectedData.min_temp.toFixed(2)} ºC
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              className={classes.icon}
              src={imageLink}
              alt={selectedData.weather_state_name}
            />
          </Grid>
          <InfoDisplay
            title="Wind speed"
            value={selectedData.wind_speed.toFixed(2)}
            size={4}
          ></InfoDisplay>
          <InfoDisplay
            title="Wind direction"
            value={selectedData.wind_direction.toFixed(2)}
            size={4}
          ></InfoDisplay>
          <InfoDisplay
            title="Wind direction compass"
            value={selectedData.wind_direction_compass}
            size={4}
          ></InfoDisplay>
          <InfoDisplay
            title="Air pressure"
            value={selectedData.air_pressure.toFixed(2)}
            size={4}
          ></InfoDisplay>
          <InfoDisplay
            title="Humidity"
            value={selectedData.humidity.toFixed(2)}
            size={4}
          ></InfoDisplay>
        </Grid>
      </CardContent>
    </Card>
  );
}
