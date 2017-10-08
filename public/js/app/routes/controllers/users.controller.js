/* globals $, toastr */
import { usersData } from 'data';
import * as nav from 'update-nav';
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
    .then(nav.update)
    .then(nav.hideLoadingScreen)
    .catch(error.handle);
};

const login = () => {
  const userData = {
    username: $('#tb-username').val(),
    passHash: $('#tb-password').val(),
  };

  return usersData.put(userData)
    .then(writeToLocalStorage)
    .then(nav.update)
    .then(nav.hideLoadingScreen)
    .catch(error.handle);
};

const logout = () => {
  return Promise.resolve()
    .then(() => {
      toastr.success('Success!');
      return localStorage.clear();
    })
    .then(nav.update)
    .then(nav.hideLoadingScreen)
    .catch(error.handle);
};

export {
  register,
  login,
  logout,
};
