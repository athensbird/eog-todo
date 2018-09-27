import { connect } from "react-redux";
import TaskList from "../components/TaskList";

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(TaskList);