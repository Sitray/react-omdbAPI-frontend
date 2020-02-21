import React from 'react';
import { useSelector } from 'react-redux';

import SearchMovieBarComponent from './SearchMovieBarComponent';
import MovieCardComponent from './MovieCardComponent';

import { API_KEY } from '../constants';
import { useFetch } from '../hooks';

import './MovieListComponent.css';

export default function MovieListComponent() {
  const movie = useSelector(state => state.movie);
  const res = useFetch(
    `http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`,
    {}
  );

  let movieInfo = res.data;

  let movieList = movieInfo ? (
    movieInfo.Search.map((data, i) => (
      <div>
        <MovieCardComponent key={i} data={data} />
      </div>
    ))
  ) : (
    <div>Not found!</div>
  );

  return (
    <div className="containerMovieList">
      {movieList}
      <div>
        <div className="searchBar">
          <SearchMovieBarComponent />
        </div>
      </div>
    </div>
  );
}
