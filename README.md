![npm](https://img.shields.io/npm/v/simple-number-generator)

# Simple Random Number Generator

# install

`npm install simple-number-generator`

# usage

```javascript
const random = require("simple-number-generator");
```

## default options

the exported function takes an option **object** with 3 arguments:

- `min` : smallest possible value to return. defaults to 0
- `max` : largest possible value to return. defaults to 1
- `integer` : round the random number. Default: false

### Examples

```javascript
// use min and max parameter
const random = require("simple-number-generator");
let params = {
  min: 10,
  max: 100
};
random(params); // example outputs → 89.67405538799946
```

```javascript
// use min, max and integer parameter
// set integer  to true to return whole number instead of float.
const random = require("simple-number-generator");
let params = {
  min: 5,
  max: 76,
  integer: true
};
random(params); // example outputs → 68
```

- only use `min` parameter

```javascript
let random = require("simple-number-generator");
let params = {
  min: 988
};
// if only provide min parameter, max number will be min + 1
random(params); // example output → 988.9231522653375
```

- only use `max` parameter

```javascript
let random = require("simple-number-generator");
let params = {
  max: 200
};
//if only provide max parameter, Min number will be max - 1
random(params); // example output → 199.28545186511627
```
