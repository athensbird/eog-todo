import { API, getHeaders, request } from "./config";

const getTasks = () => request(`${API}/tasks`, getHeaders());

export default getTasks;
