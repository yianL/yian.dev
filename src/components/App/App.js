import React, { Component } from 'react';
import cn from 'classnames';
import Parallax from 'parallax-js';
import NeonText from '../NeonText';
import TypeWriter from '../TypeWriter';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    const scene = document.getElementById('scene');
    new Parallax(scene, {
      invertX: true,
      invertY: true,
      scalarX: 10,
      frictionY: 0.1
    });
  }

  render() {
    return (
      <div className="App" id="scene">
        <div data-depth="0.8" />
        <div className="layer" data-depth="0.4">
          <div className={cn('name', 'first')}>
            <NeonText r={255} g={0} b={60}>
              Yi-An
            </NeonText>
          </div>
        </div>
        <div className="layer" data-depth="0.2">
          <div className={cn('name', 'last')}>
            <NeonText r={38} g={149} b={255} animation="buzz">
              Lai
            </NeonText>
          </div>
          <div className="cmd">
            <TypeWriter phrases={['hello', 'world', 'I am groot']} />
          </div>
        </div>
      </div>
    );
  }
}
