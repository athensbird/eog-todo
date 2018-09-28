import { API, postHeaders, request } from "./config";

const addTask = (title) => {
  const body = { title };
  return request(`${API}/tasks`, postHeaders(body))
};

export default addTask;
