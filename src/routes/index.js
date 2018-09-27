import * as React from "react";
import { Route } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskDetail from '../components/TaskDetail';

const Routes = () => (
  <div>
    <Route exact path="/" component={TaskList} />
    <Route exact path="/task/:task_id" component={TaskDetail} />
  </div>
);

export default Routes;
