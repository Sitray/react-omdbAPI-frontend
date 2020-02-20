import React from 'react';

import SearchMovieBarComponent from './SearchMovieBarComponent';
import MovieCardComponent from './MovieCardComponent';

import './MovieListComponent.css';

export default function MovieListComponent() {
  return (
    <div className="containerMovieList">
      <div className="test">
        <MovieCardComponent />
      </div>
      <div>
        <SearchMovieBarComponent />
      </div>
    </div>
  );
}
