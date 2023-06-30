import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <li>
        <div className='TodoItem'>
          <p>{this.props.task}</p>
          <span>
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.handleRemove}>Delete</button>
          </span>
        </div>
      </li>
    );
  }
}

export default Todo;
