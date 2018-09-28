import { connect } from "react-redux";
import TaskDetail from "../components/TaskDetail";
import { getTask, updateTask } from "../actions";

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, { getTask, updateTask })(TaskDetail);
