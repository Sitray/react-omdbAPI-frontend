const initialState = {
  movie: '',
  movieId: ''
};

export default (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SET_MOVIE':
      newState.movie = action.item;
      console.log(newState.movie);
      return newState;

    case 'SET_MOVIE_ID':
      newState.movieId = action.item;
      console.log(newState.movieId + 'movieId');
      return newState;

    default:
      return state;
  }
};
