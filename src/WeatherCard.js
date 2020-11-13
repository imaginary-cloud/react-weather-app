import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function WeatherCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={2}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            13 November
          </Typography>
          {/* Icon space */}
          <Typography variant="h5" component="h3">
            15 ºC
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default WeatherCard;
