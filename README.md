[![npm](https://img.shields.io/npm/v/simple-random-number-generator)](https://www.npmjs.com/package/simple-random-number-generator)
[![build with travis CI](https://img.shields.io/travis/handipriyono/simple-number-generator/master)](https://travis-ci.org/handipriyono/simple-number-generator)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

# Simple Random Number Generator

# install

`npm install simple-random-number-generator`

# usage

```javascript
const random = require("simple-random-number-generator");
```

## default options

the exported function takes an option **object** with 3 arguments:

- `min` : smallest possible value to return. defaults to 0
- `max` : largest possible value to return. defaults to 1
- `integer` : round the random number. Default: false

### Examples

```javascript
// use min and max parameter
const random = require("simple-random-number-generator");
let params = {
  min: 10,
  max: 100
};
random(params); // example outputs → 89.67405538799946
```

```javascript
// use min, max and integer parameter
// set integer  to true to return whole number instead of float.
const random = require("simple-random-number-generator");
let params = {
  min: 5,
  max: 76,
  integer: true
};
random(params); // example outputs → 68
```

- only use `min` parameter

```javascript
let random = require("simple-random-number-generator");
let params = {
  min: 988
};
// if only provide min parameter, max number will be min + 1
random(params); // example output → 988.9231522653375
```

- only use `max` parameter

```javascript
let random = require("simple-random-number-generator");
let params = {
  max: 200
};
//if only provide max parameter, Min number will be max - 1
random(params); // example output → 199.28545186511627
```
