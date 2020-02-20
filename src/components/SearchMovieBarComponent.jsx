import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import './SearchMovieBar.css';

function SearchMovieBarComponent(props) {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState('');

  const handleSUmbit = event => {
    event.preventDefault();
    console.log(movie);
    dispatch({
      type: 'SET_MOVIE',
      item: movie
    });

    //console.log(API_KEY);
  };

  // const res = useFetch(
  //   `http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`,
  //   {}
  // );

  // if (res.data) {
  //   console.log(res.data.Search[0].Title);
  // }

  return (
    <div className="container">
      <div className="form">
        <form noValidate autoComplete="off" onSubmit={handleSUmbit}>
          <h2 className="title">Search</h2>
          <Input
            placeholder="Enter a movie..."
            className="input"
            inputProps={{ 'aria-label': 'description' }}
            value={movie}
            onChange={e => setMovie(e.target.value)}
          />
          <div className="button">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          component={Link}
          to="/movies"
        >
          next
        </Button>
      </div>
    </div>
  );
}

export default connect()(SearchMovieBarComponent);
