import React from "react";
import Task from './Task';

const TaskList = ({ tasks, history }) => {
  return tasks.map(task => (
    <Task task={task} history={history} key={task.id} />
  ));
}

export default TaskList;
