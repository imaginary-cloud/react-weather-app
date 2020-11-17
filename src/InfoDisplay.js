import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    fontSize: 16
  },
  value: {
    fontSize: 20
  },
  pos: {
    marginBottom: 20
  }
});

function InfoDisplay(props) {
  const classes = useStyles();

  return (
    <Grid item xs={props.size} className={classes.pos}>
      <Typography className={classes.title} component="p" align="center">
        {props.title}
      </Typography>
      <Typography className={classes.value} component="p" align="center">
        {props.value}
      </Typography>
    </Grid>
  );
}

export default InfoDisplay;
