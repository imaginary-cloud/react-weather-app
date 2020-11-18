import * as React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { makeStyles } from "@material-ui/core/styles";
import { Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const useStyles = makeStyles({
  label: {
    color: "black"
  }
});

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw"
});
const zoom = [8];

function LocationMap(props) {
  const classes = useStyles();
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v8"
      zoom={zoom}
      containerStyle={{
        height: "100%",
        width: "100%"
      }}
      center={props.point}
    >
      <Popup coordinates={props.point}>
        <h1 className={classes.label}>{props.location}</h1>
      </Popup>
    </Map>
  );
}

export default LocationMap;
