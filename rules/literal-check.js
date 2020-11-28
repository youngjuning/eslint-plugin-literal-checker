'use strict';

module.exports = function(context) {
  let blacklist = [];
  let whitelist = [];
  if (Array.isArray(context.options[0])) {
    blacklist = context.options[0];
  }
  if (Array.isArray(context.options[1])) {
    whitelist = context.options[1];
  }
  return {
    'Literal': node => {
      let message = null;
      let value = String(node.value);
      blacklist.forEach(blackItem => {
        if(value.indexOf(blackItem) !== -1 && whitelist.indexOf(value) === -1) {
          message = `You should not use "${blackItem}".`;
          context.report({node: node, message: message});
        }
      });
    }
  };
};

module.exports.schema = [{
  type: 'array',
  items: { type: 'string' },
  uniqueItems: true
}];
