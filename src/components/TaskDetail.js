import React, { Component }from 'react';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    const taskID = this.props.match.params.task_id;
    const task = this.props.tasks.find(t => t.id === taskID);
    this.state = { task };
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
    const taskID = this.props.match.params.task_id;
    const task = this.props.tasks.filter(t => t.id === taskID);
    return (
      <Card>
        {task && <div>
          <Link to={"/task"}>Back to Tasks</Link>
          <TextField
            id="title"
            value={this.state.task.title}
            onChange={this.handleChange("title")}
          />
          <Button>Complete</Button>
          <TextField
            id="description"
            value={this.state.task.description}
            onChange={this.handleChange("description")}
          />
          <Button>Save</Button>
          <Button>Cancel</Button>
          <Button>Delete</Button>
        </div>}
      </Card>
    );
  }
}

export default withStyles(styles)(TaskDetail);
