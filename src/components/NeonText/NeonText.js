import React, { Component } from 'react';
import rgb2hsl from 'rgb-to-hsl';
import cn from 'classnames';
import './NeonText.css';

class NeonText extends Component {
  static defaultProps = {
    r: 255,
    g: 0,
    b: 60,
    animation: 'blink'
  };

  getStyles(r, g, b) {
    const rgb = `${r},${g},${b}`;
    const color = rgb2hsl(r, g, b);
    return {
      color: `hsl(${Math.round(color[0], 2)}, ${color[1]}, 90%)`,
      textShadow: `
      0 0 0 transparent,
      0 0 10px rgb(${rgb}),
      0 0 20px rgba(${rgb},.5),
      0 0 40px rgba(${rgb},1),
      0 0 100px rgba(${rgb},1),
      0 0 200px rgba(${rgb},1)`
    };
  }

  render() {
    const { className, children, r, g, b, animation } = this.props;

    return (
      <span
        className={cn('neon-text', className, animation)}
        style={this.getStyles(r, g, b)}
      >
        {children}
      </span>
    );
  }
}

export default NeonText;
