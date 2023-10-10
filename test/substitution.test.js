// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution")

describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const message = 'message';
        const actual = substitution(message);
        expect(actual).to.be.false;
    })

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message";
        const alphabet = "alphmissingletters";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "abcdefgabcdefgabcdefgabcde";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
})

describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "testing";
      const alphabet = "lpjkwryctmbhexguszfvanodiq";
      const actual = substitution(message, alphabet);
      const expected = "vwfvtxy";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "more a testing";
      const alphabet = ".wae$zrdxtfc?gvuhbijnokmp/";
      const actual = substitution(message, alphabet);
      const expected = "?vb$ . j$ijxgr";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "give back all the spaces";
      const alphabet = "dnmwgaikopbqljuxhyfeszvctr";
      const actual = substitution(message, alphabet);
      const expected = "iozg ndmb dqq ekg fxdmgf";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "wgmuwg ekof";
      const alphabet = "dnmwgaikopbqljuxhyfeszvctr";
      const actual = substitution(message, alphabet, false);
      const expected = "decode this";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "znw .tmu kum.kuk";
      const alphabet = "n?mkucrxpvgebt./$hwojdzafi";
      const actual = substitution(message, alphabet, false);
      const expected = "was once decoded";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "darwrayr wdjnrw";
      const alphabet = "jqnorecmtgxbhlvdpawuiyzkfs";
      const actual = substitution(message, alphabet, false);
      const expected = "preserve spaces";

      expect(actual).to.equal(expected);
    });
  });