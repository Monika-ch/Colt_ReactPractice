import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
      "pink",
      "papayawhip",
      "grey",
      "cyan",
      "aqua",
      "lime",
      "violet",
      "coral",
      "lightyellow",
      "greenyellow",
      "teal",
      "lightcyan",
      "cornsilk",
      "tan",
      "chocolate",
      "azure",
      "lavenderblush",
      "mistyrose",
      "silver",
      "powderblue",
      "indigo",
      "springgreen",
      "olive",
      "darkturquoise",
    ],
  };
  render() {
    let boxes = new Array(this.props.numBoxes).fill(
      <Box colors={this.props.allColors} />
    );
    return (
      <div>
        <h1>
          Click any box to change it's <span>color !</span>
        </h1>
        <div className='BoxContainer'>{boxes}</div>
      </div>
    );
  }
}

export default BoxContainer;
