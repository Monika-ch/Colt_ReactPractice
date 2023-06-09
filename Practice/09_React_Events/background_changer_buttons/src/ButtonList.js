import React, { Component } from "react";
import "./ButtonList.css";

class ButtonList extends Component {
  static defaultProps = {
    colors: [
      "pink",
      "papayawhip",
      "grey",
      "coral",
      "aqua",
      "lime",
      "powderblue",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { color: "silver" };
  }
  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((c) => {
          return (
            // <button
            //   onClick={this.changeColor.bind(this, c)}
            //   style={{ backgroundColor: c }}
            // >
            <button
              onClick={() => this.changeColor(c)}
              style={{ backgroundColor: c }}
            >
              Click on me!
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonList;
