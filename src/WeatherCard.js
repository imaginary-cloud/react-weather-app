import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Moment from "moment";

function WeatherCard(props) {
  return (
    <Grid item xs={2}>
      <Card className="root">
        <CardContent>
          <Typography variant="h5" component="h2">
            {Moment(props.data.applicable_date).format("d MMMM")}
          </Typography>
          {/* Icon space */}
          <Typography variant="h5" component="h3">
            {props.data.the_temp.toFixed(2)} ºC
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default WeatherCard;
