import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  complete: {
    'background-color': '#E4E4E4',
    'margin-left': '1rem',
  },
  save: {
    'background-color': '#3FBAF9',
    'margin-right': '1rem',
  },
  cancel: {
    'background-color': '#E4E4E4',
    'margin-right': '1rem',
  },
  delete: {
    'background-color': '#E57373',
    'margin-right': '1rem',
  },
  row: {
    'margin-top': '1rem',
    'border-radius': '0',
    'box-shadow': 'none',
  },
  grid : {
    margin: '10% 20%',
    width: '60%',
    flexGrow: '1',
    'box-shadow': 'none',
  },
  title: {
    width: '30%',
  },
  description: {
    width: '60%',
  },
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
    const { classes } = this.props;
    return (
      <Grid className={classes.grid}>
        {task && <Grid container="true">
          <Paper className={classes.row}>
            <Link to={"/task"}>Back to Tasks</Link>
          </Paper>
          <Paper className={classes.row}>
            <TextField
              id="title"
              className={classes.title}
              value={this.state.task.title}
              onChange={this.handleChange("title")}
            />
            <Button className={classes.complete}>Complete</Button>
          </Paper>
          <Paper className={classes.row}>
            <TextField
              id="description"
              className={classes.description}
              value={this.state.task.description}
              onChange={this.handleChange("description")}
            />
          </Paper>
          <Paper className={classes.row}>
              <Button className={classes.save}>Save</Button>
              <Button className={classes.cancel}>Cancel</Button>
              <Button className={classes.delete}>Delete</Button>
          </Paper>
        </Grid>}
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskDetail);
