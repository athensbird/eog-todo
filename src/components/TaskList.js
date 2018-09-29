import React from "react";
import Paper from "@material-ui/core/Paper";
import Task from './Task';

const TaskList = ({ tasks, deleteTask, getTasks, history }) => {
  if (tasks.data.length === 0) getTasks();
  if (tasks.loading) {
    return (<Paper>Loading the Task List...</Paper>);
  }
  return tasks.data.map(task => (
    <Task task={task} deleteTask={deleteTask} history={history} key={task.id} />
  ));
}

export default TaskList;
