import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  listItem: {
    'text-align': 'center',
  },
});

const task = (props) => (
  <div>
    <List>
      <ListItem className={props.classes.listItem}>
        <ListItemText primary={props.task.title}/>
      </ListItem>
      <ListItem className={props.classes.listItem}>
        <ListItemText primary={props.task.description}/>
      </ListItem>
      <ListItem className={props.classes.listItem}>
        <ListItemText primary={props.task.completed}/>
      </ListItem>
      <Checkbox checked={props.task.completed} />
    </List>
  </div>
);

export default withStyles(styles)(task);
