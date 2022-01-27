# eslint-plugin-literal-checker

An ESLint micro plugin.

## Installation

```
$ npm install eslint-plugin-literal-checker --save-dev
```

## Usage

```
// .eslintrc.js
{
  plugins: ['literal-checker'],
  rules: {
    'literal-checker/literal-check': [
      2,
      ['tuya.'],
      ['tuya.m.device.media.latest', 'tuya.m.device.media.detail'],
    ],
  }
}
```


## Supported Rules

### `literal-check`

Define denylist strings and allowlist strings for literal.
