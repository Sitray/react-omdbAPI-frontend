import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import MovieListComponent from './components/MovieListComponent';
import MovieDetailComponent from './components/MovieDetailComponent';

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <HomeComponent />} />
          <Route
            path="/movies/:movieName"
            component={props => <MovieListComponent {...props} />}
          />
          <Route
            path="/detail/:imdbID"
            component={() => <MovieDetailComponent />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
