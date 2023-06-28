import React, { Component } from "react";
import Box from "./Box";
import { v4 as uuid } from "uuid";

class BoxListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ height: 0, width: 0, backgroundColor: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='height'></label>
          <input
            type='number'
            id='height'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor='width'></label>
          <input
            type='number'
            id='width'
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor='backgroundColor'></label>
          <input
            type='text'
            id='backgroundColor'
            name='backgroundColor'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <button>Add a new box</button>
        </form>
        <Box addBox={this.addBox} />
      </div>
    );
  }
}

export default BoxListForm;
