export const handleErrorsToFetchingAPI = (response, serviceName) => {
  if (!response.ok) {
    switch (response.status) {
      case 404:
        throw {
          message: `Error to fetching ${serviceName} return 404`,
          status: response.status,
        };
      case 500:
        throw {
          message: `Error to fetching data in ${serviceName}`,
          status: response.status,
        };
      default:
        return;
    }
  }
  return response;
};
