import React, { Component } from "react";
// import BoxListForm from "./BoxListForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [{ width: 10, height: 10, color: "orange" }] };
    // this.addItem = this.addItem.bind(this);
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box width={box.width} height={box.width} color={box.color} />
    ));
    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        {/* <BoxListForm /> */}
        {boxes}
      </div>
    );
  }
}

export default BoxList;
