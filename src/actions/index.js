export const actionCollections = {
  ADD_TASK: "ADD_TASK",
}

export const addTask = (task) => {
  return {
    type: actionCollections.ADD_TASK,
    task,
  }
}
