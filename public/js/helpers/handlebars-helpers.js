import Handlebars from 'handlebars';

const attach = () => {
  Handlebars.registerHelper('for', (from, to, increment, allPosts, category, block) => {
    let output = '';
    for (let i = from; i <= to; i += increment) {
      output += block.fn({
        i,
        allPosts,
        category,
      });
    }
    return output;
  });
};

export { attach };
