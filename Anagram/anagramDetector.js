function getCharDictionary(word) {
  let dict = new Map();
  word.split('').map(char => {
    if (dict.has(char)) {
      let value = dict.get(char);
      dict.set(char, value + 1);
    } else {
      dict.set(char, 1);
    }
  });
  return dict;
}

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let dictWord1 = getCharDictionary(word1);
  let dictWord2 = getCharDictionary(word2);

  if (dictWord1.size !== dictWord2.size) {
    return false;
  }

  let isValidAnagram = true;

  for (let [key, value] of dictWord2.entries()) {
    if (!dictWord1.has(key)) {
      isValidAnagram = false;
      break;
    } else {
      let valueWord1 = dictWord1.get(key);
      let valueWord2 = dictWord2.get(key);

      if (valueWord1 !== valueWord2) {
        isValidAnagram = false;
        break;
      }
    }
  }

  return isValidAnagram;
}

console.log(`isAnagram('foefet', 'toffee')`, isAnagram('foefet', 'toffee'));
console.log(`isAnagram('foefet', 'toffeee')`, isAnagram('foefet', 'toffeee'));
