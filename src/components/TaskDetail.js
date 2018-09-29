import React from "react";
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
  loading: {
    'margin': "20% 40%",
    width: "20%",
    'box-shadow': 'none',
  }
};

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task };

    this.cancelChange = this.cancelChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.navigateToList = this.navigateToList.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.task !== this.state.task) {
      this.setState({
        task: nextprops.task,
      }, () => {
        this.initState = this.state;
      });
    }
  }

  componentDidMount() {
    const taskID = this.props.match.params.task_id;
    this.props.getTask(taskID);
  }
  cancelChange() {
    this.setState({ task: this.initState.task });
  }
  navigateToList() {
    this.props.history.push('/task');
  }
  handleChange(field) {
    return (event) => {
      const value = event.target.value;
      this.setState({
        task: {
          ...this.state.task,
          [field]: value,
        }
      });
    };
  }
  saveTask() {
    this.props.updateTask({
      task: this.state.task,
      callback: this.navigateToList,
    });
  }
  completeTask() {
    this.props.completeTask({
      task: Object.assign({}, this.state.task, { completed: true }),
      callback: this.navigateToList,
    })
  }
  deleteTask() {
    this.props.deleteTask({
      task: this.state.task,
      callback: this.navigateToList,
    })
  }
  render() {
    const { classes } = this.props;
    const { loading } = this.props.task;
    if (loading) {
      return (<Paper className={classes.loading}>Loading the Details...</Paper>);
    }
    return (
      <Grid className={classes.grid}>
        {this.state.task && <Grid container="true">
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
            <Button
              className={classes.complete}
              onClick={this.completeTask}
            >Complete</Button>
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
              <Button className={classes.save} onClick={this.saveTask}>Save</Button>
              <Button className={classes.cancel} onClick={this.cancelChange}>Cancel</Button>
              <Button className={classes.delete} onClick={this.deleteTask} >Delete</Button>
          </Paper>
        </Grid>}
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskDetail);
