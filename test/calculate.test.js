const expect = require("chai").expect;
var assert = require("assert");
const random = require("..");

describe("using random number generator function", function() {
  it("Should return random number", function() {
    expect(random({ min: 10, max: 19 })).to.be.a("number");
  });
  it("should show warning message :max. must be greater than min!", function() {
    expect(random({ min: 100, max: 10 }))
      .to.be.a("string")
      .equal("max. must be greater than min.");
  });
  it("should return random number within 1 and 5", function() {
    expect(random({ min: 1, max: 5 })).to.be.within(1, 5); // Not recommended
  });
});
