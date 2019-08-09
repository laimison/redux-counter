import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log('Counter.js: executed');
    return (
      <div className="container">
        <button className="buttons"
          onClick={this.props.decreaseCount}>-</button>
        <span>{this.props.countValue}</span>
        <button className="buttons"
          onClick={this.props.increaseCount}>+</button>
      </div>
    );
  }
}

export default Counter;
