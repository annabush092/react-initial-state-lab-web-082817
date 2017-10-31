// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  writeNum() {
    if(this.state.secondsLeft !== 0) {
        return `${this.state.secondsLeft} seconds left before I go boom!`
    }else {
        return `Boom!`
    }
  }

  render() {
    return (
      <p>{this.writeNum()}</p>
    )
  }
}
