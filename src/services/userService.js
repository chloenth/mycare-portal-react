import API from '~/config/apis';
import httpRequest from '~/utils/httpRequest';

export const getMyInfo = async () => {
  const response = await httpRequest.get(API.MY_INFO);

  return response;
};
