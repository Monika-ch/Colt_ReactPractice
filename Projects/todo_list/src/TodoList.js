import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "milk my cat", key: "#12345", id: "#12345" },
        { task: "walk my dog", key: "#54321", id: "#54321" },
      ],
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  createTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter((t) => t.id !== id) });
  }
  updateTodo(id, updatedTask) {
    // const updatedTodos = this.state.todos.map((todo) =>
    //   todo.id === id ? { ...todo, task: updatedTask } : todo
    // );
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: updatedTask };
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    let todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
      />
    ));
    return (
      <div className='Todo'>
        <div>
          <h1>Todo List!</h1>
          <p>A Simple React Todo List App.</p>
          <hr />
        </div>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
