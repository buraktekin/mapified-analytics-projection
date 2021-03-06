import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
const styles = require("../assets/theme/gmaps_theme.json");
const { compose, withProps, withStateHandlers } = require("recompose");

// .ENV initialize
require('dotenv').config('.env');

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')


const GMap = 
  compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCk4cjEaM7VvvpWgS_CutqF1AIg8OEGItI&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100vh` }} />,
      mapElement: <div style={{ height: `100%` }} />,
      center: { lat: 39.0096473, lng: 30.6776116 },
    }),
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={4}
      defaultCenter={props.center}
      defaultOptions={{ styles: styles }}
    >
    </GoogleMap>
  );

export default GMap;