import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import MovieCardComponent from './components/MovieCardComponent';
export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <HomeComponent />} />
          <Route path="/movie" render={() => <MovieCardComponent />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
