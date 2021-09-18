import services, {baseUrl} from '../config/fetchConfig';
import {LOCAL_URL} from '../../utils/constant';
import axios from 'axios';

export const toggleAuthActionCreator = data => ({
  type: 'toggleAuth',
  payload: data,
});

export const login = async (user, onSuccess, onError) => {
  try {
    const config = {
      'Content-Type': 'application/json',
    };
    const res = await axios.post(LOCAL_URL + '/auth/login', user, config);
    console.log('response of login ', res);
    if (res.status == 201) {
      onSuccess(res);
    } else {
      onError(res);
    }
  } catch (e) {
    onError(e);
    console.log('error -->', e);
  }
};

export const signUp = async (newUser, onSuccess, onError) => {
  console.log('data', newUser);
  try {
    const config = {
      'Content-Type': 'application/json',
    };
    const res = await axios.post(LOCAL_URL + '/auth/signup', newUser, config);
    console.log('result ==>', res);
    if (res.status == 201) {
      onSuccess(res);
    } else {
      onError(res);
    }
  } catch (e) {
    onError(e);
    console.log('error -->', e);
  }
};

export const forgetPassword = async (email, onSuccess, onError) => {
  try {
    const res = await services.Post(`users/forgotPw?email=${email}`);
    console.log('result ==>', res);
    if (res.status == 'success') {
      onSuccess(res);
    } else {
      onError(res);
    }
  } catch (e) {
    onError(e);
    console.log('error -->', e);
  }
};

export const logout = onSuccess => {
  onSuccess({});
};
