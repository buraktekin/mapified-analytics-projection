import React, { Component } from 'react';
import GMap from './components/GMap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GMap
        googleMapURL='https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCk4cjEaM7VvvpWgS_CutqF1AIg8OEGItI&center=43.601100318465356,26.728627203911365&zoom=5&format=png&maptype=roadmap&style=color:0x03d399%7Cvisibility:on&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels%7Ccolor:0x25d399%7Csaturation:100&style=element:labels.icon%7Cvisibility:off&style=element:labels.text%7Ccolor:0x25d399%7Cvisibility:simplified&style=element:labels.text.fill%7Ccolor:0x099d72%7Csaturation:100%7Cweight:4.5&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.country%7Celement:geometry%7Ccolor:0x16e188%7Cweight:0.5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.locality%7Celement:geometry.fill%7Ccolor:0xff6993&style=feature:administrative.province%7Celement:geometry.stroke%7Cweight:1&style=feature:administrative.province%7Celement:labels.text%7Ccolor:0xf89245&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0xd6d6d6%7Clightness:100&style=feature:landscape.natural.terrain%7Cvisibility:off&style=feature:landscape.natural.terrain%7Celement:geometry.fill%7Ccolor:0xff7271&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x5ee5b6&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road%7Celement:geometry.fill%7Ccolor:0x00d0c8%7Cweight:0.5&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Csaturation:100%7Cvisibility:off&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0x455e96&style=feature:water%7Celement:geometry.stroke%7Cweight:4&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360'
        ></GMap>
      </div>
    );
  }
}

export default App;
