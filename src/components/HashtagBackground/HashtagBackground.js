import React, { Component } from 'react';
import './HashtagBackground.css';

const randomInt = max => Math.round(Math.random() * max);

class HashtagBackground extends Component {
  static defaultProps = {
    hashtags: []
  };

  render() {
    const { hashtags } = this.props;

    return (
      <div className="hashtags">
        {hashtags.map(hashtag => (
          <div
            key={hashtag}
            className="hashtag"
            style={{
              top: `${randomInt(100)}%`,
              left: `${randomInt(100)}%`,
              transform: `rotate(${randomInt(8) - 4}deg)`
            }}
          >
            {`#${hashtag}`}
          </div>
        ))}
      </div>
    );
  }
}

export default HashtagBackground;
