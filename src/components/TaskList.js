import React from "react";
import Paper from "@material-ui/core/Paper";
import Task from './Task';

const TaskList = ({ tasks, getTasks, history }) => {
  getTasks();
  if (tasks.loading) {
    return (<Paper>Loading the Task List...</Paper>);
  }
  return tasks.data.map(task => (
    <Task task={task} history={history} key={task.id} />
  ));
}

export default TaskList;
