import React, { Component } from 'react';
import Parallax from 'parallax-js';
import NeonText from '../NeonText';
import TypeWriter from '../TypeWriter';
import HashtagBackground from '../HashtagBackground';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    const scene = document.getElementById('scene');
    new Parallax(scene, {
      invertX: true,
      invertY: true,
      // scalarX: 10,
      frictionY: 0.1
    });
  }

  render() {
    return (
      <div className="App">
        <div id="scene" className="background">
          <div className="layer" data-depth="0.2">
            <HashtagBackground
              hashtags={['reactjs', 'angularjs', 'java', 'webapp']}
            />
          </div>
          <div className="layer" data-depth="0.4">
            <HashtagBackground
              hashtags={[
                'kubernetes',
                'containers',
                'fullstack',
                'fixedgear',
                'yolo'
              ]}
            />
          </div>
        </div>
        <div className="container">
          <div className="name">
            <div className="first">
              <NeonText r={255} g={0} b={60}>
                Yi-An
              </NeonText>
            </div>

            <div className="last">
              <NeonText r={38} g={149} b={255} animation="buzz">
                Lai
              </NeonText>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="cmd">
            <TypeWriter
              phrases={['likes to ride a fixed gear', 'world', 'I am groot']}
            />
          </div>
        </div>
      </div>
    );
  }
}
