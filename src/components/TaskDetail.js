import React, { Component }from 'react';
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    this.state = {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(field) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        [field]: value,
      });
    };
  }
  render() {
    return (
      <div>
        <Chip>Back to Tasks</Chip>
        <TextField
          id="title"
          value={this.state.title}
          onChange={this.handleChange("title")}
        />
        <Button>Complete</Button>
        <TextField
          id="description"
          value={this.state.description}
          onChange={this.handleChange("description")}
        />
        <Button>Save</Button>
        <Button>Cancel</Button>
        <Button>Delete</Button>
      </div>
    );
  }
}

export default withStyles(styles)(TaskDetail);
