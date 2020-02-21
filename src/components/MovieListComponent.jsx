import React from 'react';
import { useParams } from 'react-router-dom';

import SearchMovieBarComponent from './SearchMovieBarComponent';
import MovieCardComponent from './MovieCardComponent';
import AlertComponent from './AlertComponent';
import SpinnerComponent from './SpinnerComponent';

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

  if (res.isLoading) {
    return <SpinnerComponent />;
  }

  let searchBarError;
  let movieList;

  if (res.error) {
    searchBarError = (
      <div className="container">
        <SearchMovieBarComponent />
        <AlertComponent alertType="error" message="Movie not found!" />
      </div>
    );
  } else {
    searchBarError = (
      <div className="searchBar">
        <SearchMovieBarComponent />
      </div>
    );
    movieList = movieInfo ? (
      movieInfo.Search.map((data, i) => (
        <div>
          <MovieCardComponent key={i++} data={data} />
        </div>
      ))
    ) : (
      <div>Not found!</div>
    );
  }

  return (
    <div className="containerMovieList">
      {movieList}
      {searchBarError}
      <div></div>
    </div>
  );
}
