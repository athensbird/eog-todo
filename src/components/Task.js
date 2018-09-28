import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  title: {
    'text-align': 'center',
  },
  titleText: {
    color: 'rgb(200,100,25)',
    'font-weight': '200',
  },
  description: {
    'align': 'center',
    margin: "0 25%",
    'max-width': "50%",
    'background-color': 'rgb(100,200,30)',
    'height': '1rem',
  }
});

const task = (props) => (
  <div>
    <List onClick={() => {props.history.push(`/task/${props.task.id}`)}}>
      <ListItem className={props.classes.title}>
        <ListItemText
          className={props.classes.titleText}
          primary={props.task.title}
        />
      </ListItem>
      <ListItem className={props.classes.description}>
        <ListItemText primary={props.task.description}/>
        <Checkbox checked={props.task.completed} />
      </ListItem>
    </List>
  </div>
);

export default withStyles(styles)(task);
