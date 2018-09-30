import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  subtitle: {
    'font-family': 'system-ui',
    'font-size': '2rem',
    'font-weight': '400',
    'margin-bottom': '2rem',
  },
  submitButton: {
    'background-color': '#F0F0F5',
    'margin-left': '2rem',
  },
});

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
    if (this.state.taskTitle === "") {
      alert("plese enter a title!");
      return;
    }
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
        <Typography className={this.props.classes.subtitle}>Add a task!</Typography>
        <Input
          id="title"
          placeholder="Enter your title"
          value={this.state.taskTitle}
          onChange={this.updateTitle}
        />
        <Button
          className={this.props.classes.submitButton}
          onClick={this.submitTask}
        >Submit
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(AddTask);
