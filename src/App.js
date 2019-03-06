import React, { Component } from 'react';
import GMapComponent from './components/GMap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GMapComponent></GMapComponent>
      </div>
    );
  }
}

export default App;
