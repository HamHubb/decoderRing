// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const subAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (!alphabet || alphabet.length !== 26) return false;
    //finding duplicates
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
          if (alphabet[i] === alphabet[j]) {
              return false; 
          }
      }
  }
  let result = '';
// loop within input with char
  for (let char of input) {
    // adds spaces to result if currently char is a space
    if(char === ' ') {
        result += ' ';
    } else {
        // converts char to lowerCase
        char = char.toLowerCase();

        if (encode) {//locates index in the regular alphabet
            const index = subAlphabet.indexOf(char);
            if (index !== -1) {
                // as long as index exists it'll add that found char to result
                result += alphabet[index];
            } else {
                // still add char even if it's not a standard letter
                result += char;
            }
        } else {
            //locates the index in subAlphabet(regular alphabet)
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                //adds the regular letter to the result
                result += subAlphabet[index];
            } else {
                //still adds char even if it's not a standard letter
                result += char;
            }
        }
    }
  }
  return result;
  }  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
