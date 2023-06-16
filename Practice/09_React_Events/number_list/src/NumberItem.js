import React, { Component } from "react";

class NumberItem extends Component {
  // static defaultProps = {

  // };
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }
  // changeColor(newColor) {
  //   this.setState({ color: newColor });
  // }

  render() {
    return (
      <li>
        {this.props.value} <button onClick={this.props.remove}>X</button>
      </li>
    );
  }
}

export default NumberItem;
