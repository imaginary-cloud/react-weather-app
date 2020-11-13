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
    <Grid item xs={4} className={classes.pos}>
      <Typography className={classes.title} variant="p" component="p">
        Humidity
      </Typography>
      <Typography variant="p" component="p">
        70
      </Typography>
    </Grid>
  );
}

export default InfoDisplay;
