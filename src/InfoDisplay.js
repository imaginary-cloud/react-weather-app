import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function InfoDisplay(props) {
  const classes = useStyles();

  return (
    <Grid item xs={props.size} className={classes.pos}>
      <Typography className={classes.title} component="p" align={props.align}>
        {props.title}
      </Typography>
      <Typography component="p" align={props.align}>
        {props.value}
      </Typography>
    </Grid>
  );
}

export default InfoDisplay;
