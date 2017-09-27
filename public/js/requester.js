/* globals $ */

const jsonRequest = (url, method, options) => {
  options = options || {};
  const data = options.data || {};
  const headers = options.headers || {};
  const contentType = options.contentType || 'application/json';

  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      method,
      contentType,
      headers,
      data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const getJson = (url, options) => {
  return jsonRequest(url, 'GET', options);
};

const postJson = (url, options) => {
  return jsonRequest(url, 'POST', options);
};

const putJson = (url, options) => {
  return jsonRequest(url, 'PUT', options);
};

export {
  getJson,
  postJson,
  putJson,
};
