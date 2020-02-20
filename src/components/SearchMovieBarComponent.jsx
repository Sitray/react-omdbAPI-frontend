import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import './SearchMovieBar.css';

export default function SearchMovieBarComponent(props) {
  const [movie, setMovie] = useState('');

  const handleSUmbit = event => {
    event.preventDefault();
    console.log(movie);
  };

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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              component={Link}
              to="/movies"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
