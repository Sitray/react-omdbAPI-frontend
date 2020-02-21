import React from 'react';
import { useParams } from 'react-router-dom';

import SearchMovieBarComponent from './SearchMovieBarComponent';
import MovieCardComponent from './MovieCardComponent';

import { API_KEY } from '../constants';
import { useFetch } from '../hooks';

import './MovieListComponent.css';

export default function MovieListComponent() {
  const { movieName } = useParams();
  const res = useFetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`,
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
      <div className="searchBar">
        <SearchMovieBarComponent />
      </div>
      <div></div>
    </div>
  );
}
