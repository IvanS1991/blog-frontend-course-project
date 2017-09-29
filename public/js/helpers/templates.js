/* globals $ */
import Handlebars from 'handlebars';

const templates = (() => {
  const cache = {};

  const get = (name) => {
    return new Promise((resolve, reject) => {
      if (cache[name]) {
        return resolve(cache[name]);
      }
      const url = `/templates/${name}.handlebars`;
      return $.get(url, (html) => {
        const template = Handlebars.compile(html);
        cache[name] = template;
        resolve(template);
      });
    });
  };

  return {
    get,
  };
})();

export { templates };
