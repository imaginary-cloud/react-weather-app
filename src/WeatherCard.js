import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "moment";

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
          {Moment(props.data.applicable_date).format("DD MMMM")}
        </Typography>
        {/* image */}
        <div className={classes.icon}></div>
        <Typography variant="h5" component="h2">
          {props.data.the_temp.toFixed(2)} ºC
        </Typography>
      </CardContent>
    </Card>
  );
}
