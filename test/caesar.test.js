// Write your tests here!
const {caesar} = require("../src/caesar");
const { expect } = require("chai");

describe('caesar', () => {
    
    it('should leaves spaces and other symbols as is', () => {
      const encoded = caesar('testing spaces', 3);
      expect(encoded).to.equal('whvwlqj vsdfhv');
    });
  
    it('should encode a message by shifting the letters', () => {
      const encoded = caesar('testing', 3);
      expect(encoded).to.equal('whvwlqj');
    });
  
    it('should return false if the shift amount is less than -25', () => {
      const wrapped = caesar('xyz', -26);
      expect(wrapped).to.false;
    });
  
    it('should return false if the shift amount is above 25', () => {
      const input = 'Hello, World!';
      const encoded = caesar(input, 26);
      expect(encoded).to.be.false;
    });
  
    it('should return false if the shift amount is 0', () => {
      const zeroShift = caesar('abc', 0);
      expect(zeroShift).to.equal(false);
    });

    it("should ignore capital letters", () => {
        const expected = caesar('A Capitalized Message', 3)
        expect(expected).to.equal('d fdslwdolchg phvvdjh');
      });
    
    it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "Xylophone player";
        const shift = 4;
        const actual = caesar(message, shift);
        const expected = "bcpstlsri tpeciv";
  
        expect(actual).to.equal(expected);
      });
    
    it("should allow for a negative shift that will shift to the left", () => {
        const message = "Xylophone player";
        const shift = -4;
        const actual = caesar(message, shift);
        const expected = "tuhkldkja lhwuan";
  
        expect(actual).to.equal(expected);
      });
    
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "xiwxmrk";
      const shift = 4;
      const actual = caesar(message, shift, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
        const message = "xiwxmrk qiwweki.";
        const shift = 4;
        const actual = caesar(message, shift, false);
        const expected = "testing message.";
  
        expect(actual).to.equal(expected);
      });
    
    it("should ignore capital letters", () => {
        const message = "Xiwxmrk qiwweki.";
        const shift = 4;
        const actual = caesar(message, shift, false);
        const expected = "testing message.";
  
        expect(actual).to.equal(expected);
      });
  
    it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "dsspskmwx'w viwievgl";
        const shift = 4;
        const actual = caesar(message, shift, false);
        const expected = "zoologist's research";
  
        expect(actual).to.equal(expected);
      });
  
    it("should allow for a negative shift that will shift to the left", () => {
        const message = "vkkhkceop'o naoawnyd";
        const shift = -4;
        const actual = caesar(message, shift, false);
        const expected = "zoologist's research";
  
        expect(actual).to.equal(expected);
      });
  
  });
