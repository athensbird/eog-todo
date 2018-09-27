import { connect } from "react-redux";
import AddTask from "../components/AddTask";
import { addTask } from "../actions";

export default connect(null, { addTask })(AddTask);
