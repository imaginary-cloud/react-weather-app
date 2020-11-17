import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Moment from "moment";

function WeatherCard(props) {
  function setSelectedData() {
    props.setSelectedData(props.data.applicable_date);
  }

  return (
    <Grid item xs={2}>
      <Card className="root" style={{ cursor: "pointer" }}>
        <CardContent onClick={setSelectedData}>
          <Typography variant="h5" component="h2">
            {Moment(props.data.applicable_date).format("DD MMMM")}
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
