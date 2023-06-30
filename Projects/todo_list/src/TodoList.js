import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='Todo'>
        <div>
          <h1>Todo List!</h1>
          <p>A Simple React Todo List App.</p>
          <hr />
        </div>
        <Todo displayTodo='milk my cat' />
        <Todo displayTodo='walk my dog' />
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
