export const handleErrorsToFetchingAPI = (response, serviceName) => {
  if (!response.ok) {
    throw `Error to fetching data in ${serviceName} API`;
  }
  return response;
};
