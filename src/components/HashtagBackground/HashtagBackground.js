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
              transform: `rotate(${randomInt(8) - 4}deg)
              translate(${randomInt(100)}vw, ${randomInt(100)}vh)`
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
