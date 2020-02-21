import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter, useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '30px'
  },
  media: {
    height: 100,
    width: 345,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30'
  }
});

function MovieCardComponent(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const movieInfo = props.data;

  if (!movieInfo) {
    return <div>loading</div>;
  }
  console.log(movieInfo);
  console.log('card component');

  const handleClick = e => {
    dispatch({
      type: 'SET_MOVIE_ID',
      item: movieInfo.imdbID
    });
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
        <Button size="small" color="primary" onClick={handleClick}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

const showMovieDetailCard = withRouter(MovieCardComponent);
export default connect(showMovieDetailCard)(MovieCardComponent);
