const initialState = {
  movie: ''
};

export default (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SET_MOVIE':
      newState.movie = '';
      newState.movie = action.item;
      console.log(newState.movie);
      return newState;

    default:
      return state;
  }
};
