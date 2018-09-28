export const actionCollections = {
  ADD_TASK: "ADD_TASK",
  GET_TASKS: "GET_TASKS",
  LOAD_TASKS: "LOAD_TASKS",
}

export const addTask = (params) => {
  return {
    type: actionCollections.ADD_TASK,
    title: params.title,
    callback: params.callback,
  }
}

export const getTasks = () => {
    return {
      type: actionCollections.GET_TASKS,
    }
}

export const loadTasks = (params) => {
  return {
    type: actionCollections.LOAD_TASKS,
    tasks: params.tasks,
  }
}
