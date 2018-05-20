import React, { Component } from 'react';
import rgb2hsl from 'rgb-to-hsl';
import cn from 'classnames';
import './NeonText.css';

export default class NeonText extends Component {
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
      0 0 200px rgba(${rgb},1),
      0 0 300px rgba(${rgb},1),
      0 0 500px rgba(${rgb},1),
      0 0 1000px rgba(${rgb},1)`
    };
  }

  render() {
    const { className, children, r, g, b } = this.props;

    return (
      <span
        className={cn('neon-text', className)}
        style={this.getStyles(r, g, b)}
      >
        {children}
      </span>
    );
  }
}
