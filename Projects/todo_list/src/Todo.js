import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className='TodoItem'>
        <p>{this.props.displayTodo}</p>
        <span>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.remove}>Delete</button>
        </span>
      </div>
    );
  }
}

export default Todo;
