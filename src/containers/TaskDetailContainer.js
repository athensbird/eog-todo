import { connect } from "react-redux";
import TaskDetail from "../components/TaskDetail";

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(TaskDetail);
