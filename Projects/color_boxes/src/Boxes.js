import React, { Component } from "react";
import Box from "./Box";
import "./Boxes.css";

class Boxes extends Component {
  render() {
    let boxes = new Array(18).fill(<Box />);
    return <div className='Boxes'>{boxes}</div>;
  }
}

export default Boxes;
