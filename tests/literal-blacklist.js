'use strict';

const RuleTester = require('eslint').RuleTester;
const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run('literal-check', require('../rules/literal-check'), {
  valid: [
    { code: 'var https = "https:";',
      options: [['http:']]
    },
    { code: 'var http = "https:";',
      options: [['http:']]
    },
    { code: 'http();',
      options: [['http:']
    ]},
    { code: 'var template = `https://${domain}`',
      options: [['http:']
    ]}
  ],
  invalid: [
    { code: 'var http = "http://example.com";',
      options: [['http:']],
      errors: ['You should not use "http:".']
    },
    { code: 'document.body.innerHTML("<script src=\'http://example.com\'></script>");',
      options: [['http:']],
      errors: ['You should not use "http:".']
    },
    { code: 'var obj = { url: "http://example.com" };',
      options: [['http:']],
      errors: ['You should not use "http:".']
    },
    { code: 'var arr = [ "https://example.com", "http://example.com" ];',
      options: [['http:']],
      errors: ['You should not use "http:".']
    },
    { code: '(function() { return "http://example.com" })();',
      options: [['http:']],
      errors: ['You should not use "http:".']
    },
    { code: 'var template = `http://${domain}`',
      options: [['http:']],
      errors: ['You should not use "http:".']
    }
  ]
});
