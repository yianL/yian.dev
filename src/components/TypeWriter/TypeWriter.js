import React, { Component } from 'react';
import cn from 'classnames';
import Typewriter from './utils/typewriter';
import './TypeWriter.css';

class TypeWriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowReplay: false
    };

    this.spanRef = this.spanRef.bind(this);
    this.playSequence = this.playSequence.bind(this);
    this.onTypeComplete = this.onTypeComplete.bind(this);

    this.sequence = props.phrases
      .reduce((acc, item) => {
        acc.push({
          text: item,
          delayAfter: 2500
        });
        acc.push({
          text: '\b'.repeat(item.length),
          delayAfter: 1000
        });
        return acc;
      }, [])
      .concat({
        text: props.phrases[0],
        delayAfter: 2500
      });
  }

  componentDidMount() {
    this.playSequence();
  }

  onTypeComplete() {
    this.setState({ allowReplay: true });
  }

  spanRef(r) {
    this.targetSpan = r;
  }

  playSequence() {
    this.setState({ allowReplay: false }, () =>
      setTimeout(() => {
        this.targetSpan.innerHTML = '';
        this.typewriter = new Typewriter(this.targetSpan);
        this.typewriter.setCaret('_');
        this.typewriter.setCaretPeriod(500);
        this.typewriter.setDelay(50, 20);
        this.typewriter.setSeqCompletionCallback(this.onTypeComplete);
        this.typewriter.playSequence(this.sequence);
      }, 500)
    );
  }

  render() {
    const { allowReplay } = this.state;
    return (
      <span className="typewriter">
        <span>{'> '}</span>
        <span ref={this.spanRef} />
        <div
          className={cn('replay', { show: allowReplay })}
          onClick={this.playSequence}
        >
          <span>Replay</span>
          <i className="fas fa-redo-alt" />
        </div>
      </span>
    );
  }
}

export default TypeWriter;
