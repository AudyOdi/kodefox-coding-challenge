function getDigitExplode(number) {
  return String(number)
    .split('')
    .reduce((newDigitValue, number) => {
      return newDigitValue.concat(number.repeat(Number(number)));
    }, '');
}

console.log(getDigitExplode('312') === '333122');
