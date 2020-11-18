import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InfoDisplay from "./InfoDisplay.js";
import Moment from "moment";

const useStyles = makeStyles({
  icon: {
    height: 200,
    marginBottom: 40,
    marginTop: 20
  },
  title: {
    margin: 20
  },
  temp: {
    paddingRight: 30
  }
});

function FullWeatherCard({ selectedData }) {
  const classes = useStyles();

  const imageLink =
    "https://www.metaweather.com/static/img/weather/png/" +
    selectedData.weather_state_abbr +
    ".png";

  return (
    <Card className="root">
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
            container
            item
            justify="flex-end"
            alignItems="center"
            className={classes.temp}
            xs={4}
          >
            <Typography variant="h2" component="h3" align="right">
              {selectedData.the_temp.toFixed(2)} ºC
            </Typography>
          </Grid>
          <Grid
            xs={3}
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography variant="h5" component="p">
              Max: {selectedData.max_temp.toFixed(2)} ºC
            </Typography>
            <Typography variant="h5" component="p">
              Min: {selectedData.min_temp.toFixed(2)} ºC
            </Typography>
          </Grid>
          <Grid item xs={5}>
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

export default FullWeatherCard;
