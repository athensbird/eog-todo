import { API, patchHeaders, request } from "./config";

const updateTask = (task) => request(`${API}/tasks/${task.id}`, patchHeaders(task));

export default updateTask;
