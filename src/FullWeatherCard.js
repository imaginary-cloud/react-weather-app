import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  }
});

export default function FullWeatherCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
            <Typography variant="p" component="p" align="left">
              Max - 16
            </Typography>
            <Typography variant="p" component="p" align="left">
              Min - 10
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {/* Icon space */}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Wind speed
            </Typography>
            <Typography variant="p" component="p" align="center">
              5.7
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Wind direction
            </Typography>
            <Typography variant="p" component="p" align="center">
              96.7
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Wind direction compass
            </Typography>
            <Typography variant="p" component="p" align="center">
              East
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="p" component="p" align="center">
              Air pressure
            </Typography>
            <Typography variant="p" component="p" align="center">
              1030
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.pos}>
            <Typography variant="p" component="p" align="center">
              Humidity
            </Typography>
            <Typography variant="p" component="p" align="center">
              70
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
