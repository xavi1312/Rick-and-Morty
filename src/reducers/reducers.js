import { getCharacters } from '../utils/rickAndMortyAPI';

const reducer = (state, action) => {
  switch (action.type) {
    case 'MORE_CHARACTERS':
      console.log(action.payload);
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
