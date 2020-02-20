import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import MovieListComponent from './components/MovieListComponent';
import reducer from '../src/reducer';

const store = createStore(reducer);
export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <HomeComponent />} />
            <Route
              path="/movies"
              component={props => <MovieListComponent {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
