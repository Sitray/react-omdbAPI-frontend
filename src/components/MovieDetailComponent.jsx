import React from 'react';
import { withRouter, useHistory, useParams } from 'react-router';

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
    maxWidth: 250,
    marginTop: '70px',
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

function MovieDetailComponent(props) {
  const classes = useStyles();
  const history = useHistory();
  const { imdbID } = useParams();
  const res = useFetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);

  const movieDetail = res.data;

  if (!movieDetail) {
    return <div>loading</div>;
  }

  const handleOnClick = () => {
    history.goBack();
  };

  return (
    <div className="container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={movieDetail.Poster}
            title="Movie"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Title: {movieDetail.Title}
            </Typography>
            <Typography variant="h7" color="textSecondary" component="p">
              Year: {movieDetail.Year} , {movieDetail.Released},{' '}
              {movieDetail.Rated}
            </Typography>
            <hr />
            <Typography variant="h6" color="textSecondary" component="p">
              <p> Plot </p> <hr /> {movieDetail.Plot}
            </Typography>

            <Typography variant="h6" color="textSecondary" component="p">
              <p> Director</p> <hr /> {movieDetail.Director}
            </Typography>

            <Typography variant="h7" color="textSecondary" component="h3">
              <p> Actors</p> <hr /> {movieDetail.Actors}
            </Typography>

            <Typography
              variant="h6"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            size="small"
            color="secondary"
            onClick={handleOnClick}
            variant="outlined"
            className={classes.button}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default withRouter(MovieDetailComponent);
