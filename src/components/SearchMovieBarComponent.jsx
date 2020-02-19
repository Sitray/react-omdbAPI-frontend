import React, { useState } from 'react';
import Input from '@material-ui/core/Input';

import './SearchMovieBar.css';

export default function SearchMovieBarComponent(props) {
  const [movie, setMovie] = useState('');

  const handleSUmbit = event => {
    event.preventDefault();
    console.log(movie);
  };

  return (
    <div className="container">
      <form
        style={{ margin: 1 }}
        noValidate
        autoComplete="off"
        onSubmit={handleSUmbit}
      >
        <h2 className="title">Search</h2>
        <div>
          <Input
            placeholder="Enter a movie..."
            inputProps={{ 'aria-label': 'description' }}
            value={movie}
            onChange={e => setMovie(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
