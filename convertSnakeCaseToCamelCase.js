function convertSnakeCaseToCamelCase(sentence) {
  return sentence
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word;
      }

      let [firstChar, ...restOfTheWord] = word;

      return firstChar.toUpperCase().concat(restOfTheWord.join(''));
    })
    .join('');
}

console.log(
  `convertSnakeCaseToCamelCase('hello_word')`,
  convertSnakeCaseToCamelCase('hello_word'),
);
console.log(
  `convertSnakeCaseToCamelCase('very_long_snake_case_sentence')`,
  convertSnakeCaseToCamelCase('very_long_snake_case_sentence'),
);
