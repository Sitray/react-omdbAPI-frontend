import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import MovieListComponent from './components/MovieListComponent';
export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <HomeComponent />} />
          <Route
            path="/movies"
            render={props => <MovieListComponent {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
