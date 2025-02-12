import API from '~/config/apis';
import httpRequest from '~/utils/httpRequest';

export const logIn = async (username, password) => {
  const response = await httpRequest.post(API.LOGIN, {
    username,
    password,
  });

  return response;
};
