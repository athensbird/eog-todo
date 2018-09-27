import * as React from "react";
import { Route } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskDetail from '../components/TaskDetail';
import AddTaskContainer from '../containers/AddTaskContainer';

const Routes = () => (
  <div>
    <Route path="/task" component={TaskList} />
    <Route path="/" component={AddTaskContainer} />
    <Route exact path="/task/:task_id" component={TaskDetail} />
  </div>
);

export default Routes;
