import { handleErrorsToFetchingAPI } from '../utils/handleErrors';

const baseURL = 'https://rickandmortyapi.com/api/character';
const serviceName = 'Characters';

export const getCharacters = (url = baseURL) => {
  return fetch(url)
    .then(res => {
      return handleErrorsToFetchingAPI(res, serviceName);
    })
    .then(res => res.json());
};

export const composeURLwithName = (name, url = baseURL) => {
  return name === undefined || name === null || name === ''
    ? url
    : `${url}/?name=${name}`;
};
