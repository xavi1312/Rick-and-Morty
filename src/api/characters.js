import { handleErrorsToFetchingAPI } from '../utils/handleErrors';

const baseURL = 'https://rickandmortyapi.com/api/character/';
const serviceName = 'Characters';

export const getCharacters = (url = baseURL) => {
  return fetch(url)
    .then(res => handleErrorsToFetchingAPI(res, serviceName))
    .then(res => res.json());
};
