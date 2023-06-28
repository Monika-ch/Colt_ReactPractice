import React, { Component } from "react";
import { v4 as uuid } from "uuid";

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
        <button>X</button>
      </div>
    );
  }
}

export default Box;
