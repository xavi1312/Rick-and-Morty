import { getCharacters } from '../api/characters';

export const FETCH_CHARACTERS_BEGIN = 'FETCH_CHARACTERS_BEGIN';
export const fetcCharacterBegin = () => ({
  type: FETCH_CHARACTERS_BEGIN,
});

export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const fetchCharacterSuccess = apiRes => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: { apiRes },
});

export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const fetchCharactersFailure = error => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: { error },
});

export const fetchCharacters = url => {
  return dispatch => {
    dispatch(fetcCharacterBegin());
    return getCharacters(url)
      .then(data => dispatch(fetchCharacterSuccess(data)))
      .catch(error => dispatch(fetchCharactersFailure(error)));
  };
};
