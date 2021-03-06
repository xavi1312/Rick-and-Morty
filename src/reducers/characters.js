import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_BEGIN,
  FETCH_CHARACTERS_FAILURE,
} from '../actions';

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
      const errorStatus = action.payload.error.status;

      switch (errorStatus) {
        case 404:
          return {
            ...state,
            characters: [],
            isLoading: false,
            prev: null,
            next: null,
          };
        default:
          return { ...state, isLoading: false };
      }

    default:
      return state;
  }
};

export default reducerCharacter;
