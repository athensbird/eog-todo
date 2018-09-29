import { API, putHeaders, request } from "./config";

const completeTask = (task) => request(`${API}/tasks/${task.id}`, putHeaders(task));

export default completeTask;
