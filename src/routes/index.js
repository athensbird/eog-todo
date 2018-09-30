import * as React from "react";
import { Route } from "react-router-dom";
import TaskListContainer from "../containers/TaskListContainer";
import TaskDetailContainer from "../containers/TaskDetailContainer";
import AddTaskContainer from "../containers/AddTaskContainer";

const Routes = () => (
  <div>
    <Route exact path="/" component={TaskListContainer} />
    <Route exact path="/" component={AddTaskContainer} />
    <Route exact path="/task/:task_id" component={TaskDetailContainer} />
  </div>
);

export default Routes;
