'use strict';

/**
 * 
 * @param {string} value Literal to check against the `denyList`
 * @param  context Plugin Context
 * @param {Node} node Current AST Node
 * @param {string[]} denyList List of prohibited literals
 */
function checkValue(value, context, node, allowList, denyList) {
  denyList.forEach(blackItem => {
    if(value.indexOf(blackItem) !== -1 && allowList.indexOf(value) === -1) {
      let message = `You should not use "${blackItem}".`;
      context.report({node: node, message: message});
    }
  });
}


module.exports = function(context) {
  let denyList = [];
  let allowList = [];
  if (Array.isArray(context.options[0])) {
    denyList = context.options[0];
  }
  if (Array.isArray(context.options[1])) {
    allowList = context.options[1];
  }
  return {
    'Literal': node => {
      let value = String(node.value);
      checkValue(value, context, node, allowList,  denyList)
    },
    'TemplateElement': node => {
      let value = String(node.value.raw);
      checkValue(value, context, node, allowList, denyList)
    }
  };
};

module.exports.schema = [{
  type: 'array',
  items: { type: 'string' },
  uniqueItems: true
}];
