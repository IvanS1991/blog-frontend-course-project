/* globals toastr */

import { templates } from 'templates';

const notFound = () => {
  console.log('Not found');
};

const handle = (err) => {
  const errMsg = err.responseJSON.msg;
  toastr.error(errMsg);
};

export {
  notFound,
  handle,
};
