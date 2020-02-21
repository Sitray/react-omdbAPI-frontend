import React from 'react';
import { useSelector } from 'react-redux';

import SearchMovieBarComponent from './SearchMovieBarComponent';
import MovieCardComponent from './MovieCardComponent';

import { API_KEY } from '../constants';
import { useFetch } from '../hooks';

import './MovieListComponent.css';

export default function MovieListComponent() {
  const movie = useSelector(state => state.movie);
  console.log(movie + 'hola');
  const res = useFetch(
    `http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`,
    {}
  );

  let movieInfo = res.data;

  let movieList = movieInfo ? (
    movieInfo.Search.map((data, i) => (
      <MovieCardComponent key={i} data={data} />
    ))
  ) : (
    <div>Not found!</div>
  );

  return (
    <div className="containerMovieList">
      <div className="test">{movieList}</div>
      <div>
        <SearchMovieBarComponent />
      </div>
    </div>
  );
}
