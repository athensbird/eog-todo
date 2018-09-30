import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Task from './Task';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  list: {
    'margin-top': '5%',
    'margin-bottom': '2%',
  },
  text: {
    'font-size': '2rem',
    'font-weight': '200',
    'font-family': 'system-ui',
    'margin-bottom': '3%',
  }
});

const TaskList = ({ classes, tasks, completeTask, deleteTask, getTasks, history }) => {
  if (tasks.data.length === 0) getTasks();
  if (tasks.loading) {
    return (<Paper>Loading the Task List...</Paper>);
  }
  const taskMap = tasks.data.map(task => (
    <Task
      task={task}
      completeTask={completeTask}
      deleteTask={deleteTask}
      history={history}
      key={task.id}
    />
  ));
  return (
    <Grid className={classes.list}>
      <Typography className={classes.text}>Your Tasks</Typography>
      {taskMap}
    </Grid>
  );
}

export default withStyles(styles)(TaskList);
