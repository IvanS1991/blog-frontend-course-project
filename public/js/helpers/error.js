/* globals toastr */

const notFound = () => {
  toastr.error('Page not found!');
};

const handle = (err) => {
  const errMsg = err.responseJSON.msg;
  toastr.error(errMsg);
};

export {
  notFound,
  handle,
};
