import React, { Component } from 'react';
import NeonText from '../NeonText';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NeonText r={255} g={0} b={60}>
          Yi-An
        </NeonText>
        <NeonText r={38} g={149} b={255}>
          Lai
        </NeonText>
      </div>
    );
  }
}
