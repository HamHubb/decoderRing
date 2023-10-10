// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
  const encodeMap = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
    'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
    'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
    'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55',
    ' ': ' '
  };

  const decodeMap = {
    '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
    '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k',
    '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
    '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
    '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z',
    ' ': ' '
  };
  //write encode first making everything w/in the string lowerCase
  if (encode){
    input = input.toLowerCase();
    //created encoded as an empty string using let as it will change throughout the input
    let encoded ='';
    //created char as a placeholder to loop through input adding the value of that key (within encodeMap) to encoded
    for (let char of input) {
      encoded += encodeMap[char];
    }
    return encoded;
  } else {
    let decoded = '';
    //declare i outside of the () so I can use it outside of the first if condition 
    let i = 0;

    while (i < input.length) {
      //handle spacing by adding the space'd string to decoded and increasing i by 1 only if the current index(i) of the input is a space
      if (input[i] === ' ') {
        decoded += ' ';
        i++;
      } else {
        //declare pair as input's substring from i to 2, 2 not being included [0,1]
        const pair = input.substr(i, 2);
        //ensuring pair is located within decodeMap or pair's length divided by 2 doesnt equal 0 (ensuring an even number) then return false
        if (!decodeMap[pair] || pair.length % 2 !==0) return false;
        //adding the index(result) of decodedMap[pair] to decoded and adding 2 to i(input[i])
        decoded += decodeMap[pair];
        i += 2;
      }
    }
    return decoded;
  }
}
console.log(polybius('translate please'))
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


