import React from 'react';
import { useParams } from 'react-router-dom';

import SearchMovieBarComponent from './SearchMovieBarComponent';
import MovieCardComponent from './MovieCardComponent';
import AlertComponent from './AlertComponent';

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
    return <div>Loading</div>;
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
    console.log('hola errorrrrrrr');
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

  console.log(res.error + 'error');

  return (
    <div className="containerMovieList">
      {movieList}
      {searchBarError}
      <div></div>
    </div>
  );
}
