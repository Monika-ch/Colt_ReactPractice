import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <li>
        <div className='TodoItem'>
          <p>{this.props.task}</p>
          <span>
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.props.removeTodo}>Delete</button>
          </span>
        </div>
      </li>
    );
  }
}

export default Todo;
