import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InfoDisplay from "./InfoDisplay.js";

function FullWeatherCard() {
  return (
    <Card className="root">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" align="center">
              13 November 2020
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" component="h3" align="right">
              15 ºC
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <InfoDisplay
              title="Max temperature"
              value="16"
              size="12"
              align="left"
            ></InfoDisplay>
            <InfoDisplay
              title="Min temperature"
              value="10"
              size="12"
              align="left"
            ></InfoDisplay>
          </Grid>
          <Grid item xs={6}>
            {/* Icon space */}
          </Grid>
          <InfoDisplay
            title="Wind speed"
            value="5.7"
            size="4"
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Wind direction"
            value="96.7"
            size="4"
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Wind direction compass"
            value="East"
            size="4"
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Air pressure"
            value="1030"
            size="4"
            align="center"
          ></InfoDisplay>
          <InfoDisplay
            title="Humidity"
            value="71"
            size="4"
            align="center"
          ></InfoDisplay>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FullWeatherCard;
