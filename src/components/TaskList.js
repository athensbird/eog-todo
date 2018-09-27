import React from "react";
import Task from './Task';

const TaskList = ({ tasks }) => {
  return tasks.map(task => (
    <Task task={task} key={task.id} />
  ));
}

export default TaskList;
