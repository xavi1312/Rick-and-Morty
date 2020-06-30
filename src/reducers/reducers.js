import { getCharacters } from '../utils/rickAndMortyAPI';

const reducer = (state, action) => {
  switch (action.type) {
    case 'MORE_CHARACTERS':
      console.group('Actual characters into array:');
      console.log(action.payload);
      console.groupEnd();

      return {
        ...state,
        characters: [...state.characters, ...action.payload],
      };
    default:
      state;
  }
  return state;
};

export default reducer;
