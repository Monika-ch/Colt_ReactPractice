import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newTodo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ newTodo: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  }
  render() {
    return (
      <div className='NewTodoForm'>
        <h3>New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              id='newTodo'
              name='newTodo'
              placeholder='New Todo'
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
            <button>Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
