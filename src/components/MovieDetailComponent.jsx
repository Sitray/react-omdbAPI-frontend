import React from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { API_KEY } from '../constants';
import { useFetch } from '../hooks';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function MovieDetailComponent(props) {
  const classes = useStyles();
  const history = useHistory();
  const movieId = useSelector(state => state.movieId);
  const res = useFetch(
    `http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
  );

  const movieDetail = res.data;

  if (!movieDetail) {
    return <div>loading</div>;
  }

  const handleOnClick = () => {
    history.goBack();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movieDetail.Poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Title: {movieDetail.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Year: {movieDetail.Year} , {movieDetail.Released},{' '}
            {movieDetail.Rated}
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="p">
            Plot: {movieDetail.Plot}
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="p">
            Director: {movieDetail.Director} <br />
            Writer: {movieDetail.Writer}
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="p">
            Imdb Rating: {movieDetail.imdbRating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={handleOnClick}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
}

const MovieDetailCard = withRouter(MovieDetailComponent);
export default connect(MovieDetailCard)(MovieDetailComponent);
