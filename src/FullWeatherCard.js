import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InfoDisplay from "./InfoDisplay.js";
import Moment from "moment";

function FullWeatherCard({ selectedData }) {
  return (
    <Card className="root">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" align="center">
              {Moment(selectedData.applicable_date).format("DD MMMM YYYY")}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" component="h3" align="right">
              {selectedData.the_temp.toFixed(2)} ºC
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <InfoDisplay
              title="Max temperature"
              value={selectedData.max_temp.toFixed(2)}
              size={12}
              align="left"
            ></InfoDisplay>
            <InfoDisplay
              title="Min temperature"
              value={selectedData.min_temp.toFixed(2)}
              size={12}
              align="left"
            ></InfoDisplay>
          </Grid>
          <Grid item xs={6}>
            {/* Icon space */}
          </Grid>
          <InfoDisplay
            title="Wind speed"
            value={selectedData.wind_speed.toFixed(2)}
            size={4}
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Wind direction"
            value={selectedData.wind_direction.toFixed(2)}
            size={4}
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Wind direction compass"
            value={selectedData.wind_direction_compass}
            size={4}
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Air pressure"
            value={selectedData.air_pressure.toFixed(2)}
            size={4}
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Humidity"
            value={selectedData.humidity.toFixed(2)}
            size={4}
            align="center"
          ></InfoDisplay>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FullWeatherCard;
