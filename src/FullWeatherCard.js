import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

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
            <Typography variant="h4" component="h3" align="right">
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
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Wind speed
            </Typography>
            <Typography variant="p" component="p" align="center">
              {selectedData.wind_speed.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Wind direction
            </Typography>
            <Typography variant="p" component="p" align="center">
              {selectedData.wind_direction.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Wind direction compass
            </Typography>
            <Typography variant="p" component="p" align="center">
              {selectedData.wind_direction_compass}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Air pressure
            </Typography>
            <Typography variant="p" component="p" align="center">
              {selectedData.air_pressure.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.pos}>
            <Typography variant="p" component="p" align="center">
              Humidity
            </Typography>
            <Typography variant="p" component="p" align="center">
              {selectedData.humidity.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
