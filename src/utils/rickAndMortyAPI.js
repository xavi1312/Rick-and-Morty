export const getCharacters = async (dispatch, moreCharacters, page, name) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    console.group('API request:');
    console.log(data);
    console.groupEnd();

    return dispatch(moreCharacters(data.results));
  } catch {
    console.error(error);
  }
};
