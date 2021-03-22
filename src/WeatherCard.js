import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  icon: {
    height: "100px"
  }
});

export default function WeatherCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.data.applicable_date}
        </Typography>
        {/* image */}
        <div className={classes.icon}></div>
        <Typography variant="h5" component="h2">
          {props.data.the_temp} ºC
        </Typography>
      </CardContent>
    </Card>
  );
}
