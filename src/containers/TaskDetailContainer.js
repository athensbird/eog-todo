import { connect } from "react-redux";
import TaskDetail from "../components/TaskDetail";
import { getTask, deleteTask, updateTask } from "../actions";

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, { getTask, deleteTask, updateTask })(TaskDetail);
