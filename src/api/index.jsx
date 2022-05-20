import { deleteReq, get, post, put } from '../utils/request';


export const isTokenValid = (token) => {
    return post('user/token', { token }).then((response) => {
        return response.success;
    }).catch((error) => {
        console.error('ERROR: isTokenValid');
        console.log(error);
        throw error;
    });
};
  
export const getCurrentUser = () => {
    return get('/api/adminUser').then((response) => {
      return response.user;
    }).catch((error) => {
      console.error('ERROR: getCurrentAdminUser');
      console.log(error);
      throw error;
    });
  };
