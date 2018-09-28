import React from "react";
import Task from './Task';

const TaskList = ({ tasks, getTasks, history }) => {
  getTasks();
  return tasks.map(task => (
    <Task task={task} history={history} key={task.id} />
  ));
}

export default TaskList;
