/* globals $, toastr */
import { router } from 'app';
import { usersData } from 'data';
import * as error from 'error';

const writeToLocalStorage = (userData) => {
  toastr.success('Success!');
  localStorage.setItem('username', userData.username);
  localStorage.setItem('authKey', userData.authKey);
};

const register = () => {
  const userData = {
    username: $('#tb-username').val(),
    passHash: $('#tb-password').val(),
  };

  return usersData.post(userData)
    .then(writeToLocalStorage)
    .catch(error.handle);
};

const login = () => {
  const userData = {
    username: $('#tb-username').val(),
    passHash: $('#tb-password').val(),
  };

  return usersData.put(userData)
    .then(writeToLocalStorage);
};

const logout = () => {
  localStorage.clear();
  toastr.success('Success!');
};

export {
  register,
  login,
  logout,
};
