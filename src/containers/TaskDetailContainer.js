import { connect } from "react-redux";
import TaskDetail from "../components/TaskDetail";
import { getTask, completeTask, deleteTask, updateTask } from "../actions";

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps,
  { getTask,
    completeTask,
    deleteTask,
    updateTask
  })(TaskDetail);
