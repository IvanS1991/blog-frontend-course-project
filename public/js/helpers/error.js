/* globals toastr, $ */

// Fires on non-registered routes
const notFound = () => {
  $('.content').html('Not found!');
  toastr.error('Not found');
};

// Fires on all other errors
const handle = (err) => {
  const errMsg = err.responseJSON.msg;
  toastr.error(errMsg);
};

export {
  notFound,
  handle,
};
