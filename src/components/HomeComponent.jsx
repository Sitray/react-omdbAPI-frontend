import React, { Component } from 'react';
import SearchMovieBar from './SearchMovieBarComponent';

import './HomeComponent.css';

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <SearchMovieBar />
      </div>
    );
  }
}
