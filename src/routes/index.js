import * as React from "react";
import { Route } from "react-router-dom";
import TaskListContainer from "../containers/TaskListContainer";
import TaskDetail from '../components/TaskDetail';
import AddTaskContainer from '../containers/AddTaskContainer';

const Routes = () => (
  <div>
    <Route path="/task" component={TaskListContainer} />
    <Route path="/" component={AddTaskContainer} />
    <Route exact path="/task/:task_id" component={TaskDetail} />
  </div>
);

export default Routes;
