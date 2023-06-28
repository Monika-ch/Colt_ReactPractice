import React, { Component } from "react";

class Box extends Component {
  render() {
    let style = {
      height: `${this.props.height}em`,
      width: `${this.props.width}em`,
      backgroundColor: this.props.color,
    };
    return (
      <div>
        <div style={style} />
        <button onClick={this.props.removeBox}>X</button>
      </div>
    );
  }
}

export default Box;
