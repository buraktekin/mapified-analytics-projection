import React, { Component } from 'react';
import GMap, { Map } from './components/GMap';

import logo from './logo.svg';
import './App.css';

const mapStyles = {
  width: '100%',
  height: '100%'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <GMap></GMap>
      </div>
    );
  }
}

export default App;
