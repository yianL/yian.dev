import React, { Component } from 'react';
import Typewriter from './utils/typewriter';
import './TypeWriter.css';

const initializeTypewriterJs = (targetDom, onComplete) => {
  const typewriter = new Typewriter(targetDom);
  typewriter.setCaret('_');
  typewriter.setCaretPeriod(500);
  typewriter.setDelay(50, 20);
  typewriter.setSeqCompletionCallback(onComplete);
  return typewriter;
};

class TypeWriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTypeProgressing: false,
      sequence: []
    };

    this.spanRef = this.spanRef.bind(this);
    this.getRandomPhrase = this.getRandomPhrase.bind(this);
    this.playRandomSequence = this.playRandomSequence.bind(this);
    this.replayRandomSequence = this.replayRandomSequence.bind(this);
    this.onTypeSequenceComplete = this.onTypeSequenceComplete.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.playRandomSequence(false);
    }, 500);
  }

  onTypeSequenceComplete() {
    this.setState({
      isTypeProgressing: false
    });
  }

  spanRef(r) {
    this.targetSpan = r;
  }

  playRandomSequence(shouldClearPreviousContent) {
    if (!this.typewriter) {
      this.typewriter = initializeTypewriterJs(
        this.targetSpan,
        this.onTypeSequenceComplete
      );
    }

    const newSequence = this.getRandomPhrase(shouldClearPreviousContent);
    this.setState(
      {
        isTypeProgressing: true,
        sequence: newSequence
      },
      () => {
        this.typewriter.playSequence(newSequence);
      }
    );
  }

  getRandomPhrase(shouldClearPreviousContent) {
    const { phrases } = this.props;
    const { sequence } = this.state;

    const result = [];
    const previousPhrase =
      sequence.length && sequence[sequence.length - 1].text;

    if (shouldClearPreviousContent && previousPhrase) {
      result.push({
        text: '\b'.repeat(previousPhrase.length),
        delayAfter: 300
      });
    }

    let randomPhrase;

    do {
      randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    } while (randomPhrase === previousPhrase);

    result.push({
      text: randomPhrase
    });

    return result;
  }

  replayRandomSequence() {
    this.playRandomSequence(true);
  }

  render() {
    const { isTypeProgressing } = this.state;
    return (
      <div
        className="typewriter"
        onClick={isTypeProgressing ? undefined : this.replayRandomSequence}
      >
        <span>{'> '}</span>
        <span ref={this.spanRef} />
      </div>
    );
  }
}

export default TypeWriter;
