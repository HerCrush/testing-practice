const capitalize = function(string) {
  const firstCharacter = string.slice(0, 1);
  return string.replace(firstCharacter, firstCharacter.toUpperCase());
};

const reverseString = function(string) {
  return [...string].reverse().join('');
};

const calculator = {
  add: function(num1, num2) {
    return num1+num2;
  },

  subtract: function(num1, num2) {
    return num1-num2;
  },

  multiply: function(num1, num2) {
    return num1*num2;
  },

  divide: function(num1, num2) {
    return num1/num2;
  }
};

const caesarCipher = function(string, shift) {
  return [...string].map(function(character) {
    const code = character.charCodeAt(0);
    if((code >= 65 && code <= 90-shift) || (code >= 97 && code <= 122-shift)) {
      return String.fromCharCode(code+shift);
    }
    else if((code > 90-shift && code <= 90) || (code > 122-shift && code <=122)) {
      return String.fromCharCode(code-26+shift);
    }
    else {
      return character;
    }
  }).join('');
};

const analizeArray = function(array) {
  const add = function(first, second) {
    return first+second;
  }

  const minimum = function(first, second) {
    if(first<second) {
      return first;
    }
    else {
      return second;
    }
  }

  const maximum = function(first, second) {
    if(first>second) {
      return first;
    }
    else {
      return second;
    }
  }

  return {
    average: array.reduce(add)/array.length,
    min: array.reduce(minimum),
    max: array.reduce(maximum),
    length: array.length
  };
}

export {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analizeArray
};