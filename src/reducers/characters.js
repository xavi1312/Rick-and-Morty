import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_FAILURE,
} from '../actions';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  isLoading: false,
  prev: null,
  next: null,
  characters: [],
};

const reducerCharacter = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      const apiRes = action.payload.data;
      const newCharacters = apiRes.results;

      return {
        ...state,
        prev: apiRes.info.prev,
        next: apiRes.info.next,
        isLoading: false,
        characters: [...newCharacters],
      };
    case FETCH_CHARACTERS_FAILURE:
      console.error(action.payload.error);
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducerCharacter;
