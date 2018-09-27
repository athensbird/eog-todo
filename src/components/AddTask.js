import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const uuidv1 = require('uuid/v1');

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "",
    }
    this.submitTask = this.submitTask.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }
  submitTask() {
    const task = {
      id: uuidv1(),
      title: this.state.taskTitle,
      description: "",
      completed: false,
    };
    this.props.addTask(task);
  }
  updateTitle(event) {
    const title = event.target.value;
    this.setState({
      taskTitle: title,
    });
  }
  render() {
    return (
      <div>
        <h3>Add a task!</h3>
        <Input
          id="title"
          placeholder="Enter your title"
          value={this.state.taskTitle}
          onChange={this.updateTitle}
        />
        <Button
          onClick={this.submitTask}
        >Submit
        </Button>
      </div>
    );
  }
}

export default AddTask;
