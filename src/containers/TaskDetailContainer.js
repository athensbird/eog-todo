import { connect } from "react-redux";
import TaskDetail from "../components/TaskDetail";
import { getTasks, updateTask } from "../actions";

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { getTasks, updateTask })(TaskDetail);
