export const getCharacters = async (dispatch, moreCharacters) => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const data = await res.json();
  return dispatch(moreCharacters(data.results));
};
