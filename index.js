function randomNoGenerator(params) {
  if (!params) {
    params = {
      min: 0,
      max: 1
    };
  }

  let { min, max, integer } = params;

  if (!min && !max) {
    min = 0;
    max = 1;
  }

  if (!min && min !== 0) {
    if (typeof max !== "number") {
      max = 1;
    }
    min = max - 1;
  }

  if (!max && max !== 0) {
    if (typeof min !== "number") {
      min = 0;
    }
    max = min + 1;
  }

  if (min > max) {
    return "max. must be greater than min.";
  }

  if (integer) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return Math.random() * (max - min) + min;
  }
}
module.exports = randomNoGenerator;
