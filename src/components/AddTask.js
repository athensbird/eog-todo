import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "",
    }
    this.resetTitle = this.resetTitle.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }
  resetTitle() {
    this.setState({ taskTitle: ""});
  }
  submitTask() {
    this.props.addTask({
      title: this.state.taskTitle,
      callback: this.resetTitle,
    });
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
