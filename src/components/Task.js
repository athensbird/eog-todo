import React from "react";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography"

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  card: {
    'background-color': '#f7f8f8',
    display: 'flex',
    width: '40%',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top': '1rem',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
    },
  },
  completed: {
    'background-color': '#DADEE5',
    'text-decoration': 'line-through',
  },
  pending: {

  },
  title: {
    'text-align': 'center',
    width: '80%',
  },
  titleText: {
    color: 'rgb(200,100,25)',
    'font-weight': '200',
  },
  descriptionPending: {
    'align': 'center',
    margin: "0 25%",
    'max-width': "50%",
    'background-color': 'rgb(200,100,30)',
    'height': '1rem',
  },
  descriptionCompleted: {
    'align': 'center',
    margin: "0 25%",
    'max-width': "50%",
    'background-color': 'rgb(100,200,30)',
    'height': '1rem',
  },
});

const task = (props) => (
    <Card className={props.classes.card}>
      <CardContent
        className={props.classes.title}
        onClick={() => {props.history.push(`/task/${props.task.id}`)}}
      >
        <Typography
          className={props.task.completed ? props.classes.completed : props.classes.pending}
        >{props.task.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={props.task.completed}
          disabled={props.task.completed}
          onChange={() => {props.completeTask({task: props.task})}}
        />
        <Button onClick={() => {props.deleteTask({task: props.task })}}>X</Button>
      </CardActions>
    </Card>
);

export default withStyles(styles)(task);
