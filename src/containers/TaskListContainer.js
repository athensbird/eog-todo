import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { getTasks } from "../actions";

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { getTasks })(TaskList);
