// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests 'written' by Hairo", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "testing";
      const actual = polybius(message);
      const expected = "44513444423322";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "testing me";
      const actual = polybius(message);
      const expected = "44513444423322 2351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "leave the space as    is";
      const actual = polybius(message);
      const expected = "1351111551 443251 3453113151 1134    4234";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "44241133341311445141";
      const actual = polybius(message, false);
      const expected = "translated";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "2242424351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "442411333413114451 531351113451";
      const actual = polybius(message, false);
      const expected = "translate please";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});