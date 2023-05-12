import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  // Not a good idea to update state like this
  // If it relies on existing state values

  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }

  // tripleKill() {
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  // }

  // // Update state with alternate callback function instead like below
  // tripleKill() {
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  // }

  // // Another refactor to above way of updating state:
  // // Write a function and pass that function to setState
  incrementCounter(curState) {
    return { score: curState.score + 1 };
  }
  tripleKill() {
    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
  }

  render() {
    return (
      <div>
        <h1>Score is {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.tripleKill}>Triple Kill</button>
      </div>
    );
  }
}

export default ScoreKeeper;
