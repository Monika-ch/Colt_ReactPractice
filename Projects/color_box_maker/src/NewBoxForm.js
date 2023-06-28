import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    let newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='height'>Height: </label>
            <input
              type='text'
              id='height'
              name='height'
              value={this.state.height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='width'>Width: </label>
            <input
              type='text'
              id='width'
              name='width'
              value={this.state.width}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='color'>Background Color: </label>
            <input
              type='text'
              id='color'
              name='color'
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <button>Add a new box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
