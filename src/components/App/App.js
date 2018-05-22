import React, { Component } from 'react';
// import Parallax from 'parallax-js';
import NeonText from '../NeonText';
import TypeWriter from '../TypeWriter';
import Menu from '../Menu';
import HashtagBackground from '../HashtagBackground';
import './App.css';

class App extends Component {
  componentDidMount() {
    // performance impact :(
    // this.parallax = new Parallax(document.getElementById('scene'), {
    //   invertX: true,
    //   invertY: true,
    //   frictionY: 0.1
    // });
  }

  componentWillUnmount() {
    if (this.parallax) {
      this.parallax.destroy();
    }
  }

  render() {
    const { firstName, lastName, labels } = this.props.data;

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
          <div className="title">
            <div className="first">
              <NeonText r={255} g={0} b={60}>
                {firstName}
              </NeonText>
            </div>

            <div className="last">
              <NeonText r={38} g={149} b={255} animation="buzz">
                {lastName}
              </NeonText>
            </div>
          </div>
          <div className="side">
            <Menu />
          </div>
          <div className="footer">
            <TypeWriter phrases={labels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
