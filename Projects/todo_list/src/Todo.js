import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task: this.props.task };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
    // you can either reset isEditing to false or call toggleForm
    // this.toggleForm();
  }
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='TodoItem'>
          <form onSubmit={this.handleUpdate}>
            <input
              type='text'
              id='task'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button className="save">Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='TodoItem'>
          <p
            className={this.props.completed ? "completed" : ""}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </p>
          <span>
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick={this.handleRemove}>Delete</button>
          </span>
        </div>
      );
    }
    return <li>{result}</li>;
  }
}

export default Todo;
