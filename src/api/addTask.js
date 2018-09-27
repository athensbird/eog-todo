import { API, postHeaders, request } from "./config";

const addTask = (task) => request(`${API}/tasks`, postHeaders(task));

export default addTask;
