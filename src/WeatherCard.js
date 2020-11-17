import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Moment from "moment";

const useStyles = makeStyles({
  icon: {
    height: 100,
    margin: 20
  }
});

function WeatherCard(props) {
  const classes = useStyles();

  function setSelectedData() {
    props.setSelectedData(props.data);
  }
  const imageLink =
    "https://www.metaweather.com/static/img/weather/png/" +
    props.data.weather_state_abbr +
    ".png";
  return (
    <Grid item xs={2}>
      <Card className="root" style={{ cursor: "pointer" }}>
        <CardContent onClick={setSelectedData}>
          <Typography variant="h5" component="h2">
            {Moment(props.data.applicable_date).format("DD MMMM")}
          </Typography>
          <img
            className={classes.icon}
            src={imageLink}
            alt={props.data.weather_state_name}
          />
          <Typography variant="h5" component="h3">
            {props.data.the_temp.toFixed(2)} ºC
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default WeatherCard;
