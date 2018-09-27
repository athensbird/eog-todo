import React from "react";
import Task from './Task';
import { tasks } from '../data/tasks';

const TaskList = () => {
  return tasks.map(task => (
    <Task task={task} key={task.id} />
  ));
}

export default TaskList;
