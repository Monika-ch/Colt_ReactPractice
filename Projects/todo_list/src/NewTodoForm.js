import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {}
  handleSubmit(evt) {}
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
              value={this.state.newTodo}
              placeholder='New Todo'
            />
            <button onClick={() => {}}>Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
