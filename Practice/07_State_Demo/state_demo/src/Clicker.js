import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }
  genRandom = (e) => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
  };
  render() {
    let button = <button onClick={this.genRandom}>Random Number</button>;
    let winText = <h2>"YOU WIN!!!"</h2>;
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 ? winText : button}
      </div>
    );
  }
}

export default Clicker;
