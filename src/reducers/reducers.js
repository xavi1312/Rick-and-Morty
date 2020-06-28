const reducer = (state, action) => {
  switch (action.type) {
    case 'MORE_CHARACTERS':
      state.characters.push('1');
      console.log(state);
      return state;
    default:
      state;
  }
  return state;
};

export default reducer;
