import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import './SearchMovieBar.css';

function SearchMovieBarComponent(props) {
  const history = useHistory();
  const [movie, setMovie] = useState('');

  const handleSUmbit = event => {
    event.preventDefault();

    if (movie.length === 0) return;

    history.push(`/movies/${movie}`);
  };

  return (
    <div className="form">
      <form noValidate autoComplete="off" onSubmit={handleSUmbit}>
        <h2 className="title">Search</h2>
        <Input
          placeholder="Enter a movie..."
          className="input"
          inputProps={{ 'aria-label': 'description' }}
          value={movie}
          type="text"
          onChange={e => setMovie(e.target.value)}
        />
        <div className="button">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(SearchMovieBarComponent);
