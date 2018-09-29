import { API, deleteHeaders, request } from "./config";

const deleteTask = (task) => request(`${API}/tasks/${task.id}`, deleteHeaders(task));

export default deleteTask;
