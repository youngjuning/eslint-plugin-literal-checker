# eslint-plugin-literal-check

An ESLint micro plugin.

## Installation

```
$ npm install eslint-plugin-literal-check --save-dev
```


## Usage

```
// .eslintrc.js
{
  plugins: ['literal-check'],
  rules: {
    'literal-check/literal-check': [
      2,
      ['tuya.ai', 'tuya.ia', 'tuya.m', 'tuya.industry', 'tuya.smarthome'],
      ['tuya.m.device.media.latest', 'tuya.m.device.media.detail'],
    ],
  }
}
```


## Supported Rules

### `literal-check`

Define blacklist strings and whitelist strings for literal.
