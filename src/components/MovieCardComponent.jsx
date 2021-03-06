import React from 'react';
import { withRouter, useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SpinnerComponent from './SpinnerComponent';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: '30px',
    boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  },
  media: {
    height: 200,
    width: 250,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30'
  },
  button: {
    width: '50%',
    marginLeft: '50px',
    margin: '10px'
  }
});

function MovieCardComponent(props) {
  const classes = useStyles();
  const history = useHistory();
  const movieInfo = props.data;

  if (!movieInfo) {
    return <SpinnerComponent />;
  }

  const handleClick = () => {
    history.push(`/detail/${movieInfo.imdbID}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movieInfo.Poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title :{movieInfo.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Year: {movieInfo.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={handleClick}
          className={classes.button}
        >
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(MovieCardComponent);
