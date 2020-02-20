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
  console.log(res);
  console.log(movie + 'hola2');

  if (res.data) {
    console.log(res.data);
    console.log(res.data.Search[0]);
  }

  let movieList;
  if (res.data) {
    movieList = res.data.Search.map((data, i) => (
      <MovieCardComponent key={i} data={data} />
    ));
  } else {
    movieList = <div>Not found!</div>;
  }

  return (
    <div className="containerMovieList">
      <div className="test">{movieList}</div>
      <div>
        <SearchMovieBarComponent />
      </div>
    </div>
  );
}
