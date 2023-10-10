// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6


const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Guard clause
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    function shiftChar(char) {
      const lowerCaseInput = char.toLowerCase();
  
      if (alphabet.includes(lowerCaseInput)) {
        const letterIndex = alphabet.indexOf(lowerCaseInput);
        let indexLoc = letterIndex + (encode ? shift : -shift);
  
        // Wrapping around
        while (indexLoc < 0) {
          indexLoc += 26;
        }
  
        while (indexLoc >= 26) {
          indexLoc -= 26;
        }
  
        // locate the char to shift within alphabet
        return alphabet[indexLoc];
      }
  
      // Return non-alphabet characters
      return char;
    }
  
    const result = input.split('').map(char => shiftChar(char)).join('');
  
    return result;
  }
  
  
//   console.log(caesar("zoologist's research", 4));
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
