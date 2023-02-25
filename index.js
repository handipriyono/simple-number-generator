function randomNoGenerator({ min, max, integer } = {}) {
  if (!min && min !== 0) { //no min
    if (typeof max !== "number") { //no max
      max = 1;
      min = max - 1;
    } else {
      min = max - 1
    }
  }

  if (!max && max !== 0) { //no max
    console.log("2");
    if (typeof min !== "number") { //no min
      min = 0;
      max = min + 1;
    } else {
      max = min + 1
    }
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
