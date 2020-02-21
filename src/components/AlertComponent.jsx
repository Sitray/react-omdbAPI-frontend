import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '10%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function AlertComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={props.alertType}>{props.message}</Alert>
    </div>
  );
}
