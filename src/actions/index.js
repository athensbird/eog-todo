export const actionCollections = {
  ADD_TASK: "ADD_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  DELETE_TASK: "DELETE_TASK",
  GET_TASK: "GET_TASK",
  GET_TASKS: "GET_TASKS",
  LOAD_TASK: "LOAD_TASK",
  LOAD_TASKS: "LOAD_TASKS",
  UPDATE_TASK: "UPDATE_TASK",
}

export const addTask = (params) => {
  return {
    type: actionCollections.ADD_TASK,
    title: params.title,
    callback: params.callback,
  }
}

export const completeTask = (params) => {
  return {
    type: actionCollections.COMPLETE_TASK,
    task: params.task,
    callback: params.callback,
  }
}

export const deleteTask = (params) => {
  return {
    type: actionCollections.DELETE_TASK,
    task: params.task,
    callback: params.callback,
  }
}

export const getTask = (id) => {
  return {
    type: actionCollections.GET_TASK,
    id,
  }
}

export const getTasks = () => {
  return {
    type: actionCollections.GET_TASKS,
  }
}

export const loadTask = (task) => {
  return {
    type: actionCollections.GET_TASK,
    task,
  }
}

export const loadTasks = (params) => {
  return {
    type: actionCollections.LOAD_TASKS,
    tasks: params.tasks,
  }
}

export const updateTask = (params) => {
  return {
    type: actionCollections.UPDATE_TASK,
    task: params.task,
    callback: params.callback,
  }
}
