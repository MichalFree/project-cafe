export const utils = {};

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
