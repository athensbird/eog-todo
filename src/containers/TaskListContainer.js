import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { getTasks, completeTask, deleteTask } from "../actions";

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { getTasks, completeTask, deleteTask })(TaskList);
