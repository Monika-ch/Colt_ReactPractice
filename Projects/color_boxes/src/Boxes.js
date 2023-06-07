import React, { Component } from "react";
import Box from "./Box";
import "./Boxes.css";

class Boxes extends Component {
  render() {
    let boxes = new Array(18).fill(<Box />);
    return (
      <div>
        <h1>
          Click any box to change it's <span>color !</span>
        </h1>
        <div className='Boxes'>{boxes}</div>;
      </div>
    );
  }
}

export default Boxes;
