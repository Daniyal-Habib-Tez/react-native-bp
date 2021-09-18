import {getStorageItem} from '../../utils';

export const baseUrl = 'http://192.168.10.20:5000/';

export default class services {
  static Get = async route => {
    try {
      const token = getStorageItem('Authorization');
      const headers = token
        ? {
            'Content-Type': 'application/json',
            Authorization: token,
          }
        : {
            'Content-Type': 'application/json',
          };
      const res = await fetch(`${baseUrl}${route}`, {
        headers,
      });
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(`Error in ${route} -->`, e);
      throw e.message;
    }
  };
  static Post = async (route, data) => {
    try {
      const token = getStorageItem('Authorization');
      const headers = token
        ? {
            'Content-Type': 'application/json',
            Authorization: token,
          }
        : {
            'Content-Type': 'application/json',
          };
      const res = await fetch(`${baseUrl}${route}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(`Error in ${route} -->`, e);
      throw e.message;
    }
  };
}
