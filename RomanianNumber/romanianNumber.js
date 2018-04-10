let romanianDictionary = new Map();
romanianDictionary.set(1, 'I');
romanianDictionary.set(5, 'V');
romanianDictionary.set(10, 'X');
romanianDictionary.set(50, 'L');
romanianDictionary.set(100, 'C');
romanianDictionary.set(500, 'D');
romanianDictionary.set(1000, 'M');

function convertNumberToRomanian(number) {
  let result = '';
  let divider = Math.pow(10, String(number).length - 1);
  while (divider >= 1) {
    let num = parseInt(number / divider);
    if (num > 10) {
      num = num % 10;
    }
    console.log('num', num);
    console.log('divider', divider);
    switch (num) {
      case 1: {
        result = result.concat(romanianDictionary.get(num * divider));
        break;
      }
      case 2:
      case 3: {
        let romanChar = romanianDictionary.get(1 * divider);
        result = result.concat(romanChar.repeat(num));
        break;
      }
      case 4: {
        let first = romanianDictionary.get(1 * divider);
        let second = romanianDictionary.get(5 * divider);
        result = result.concat(first).concat(second);
        break;
      }
      case 5: {
        result = result.concat(romanianDictionary.get(num * divider));
        break;
      }
      case 6: {
        let first = romanianDictionary.get(5 * divider);
        let second = romanianDictionary.get(1 * divider);
        result = result.concat(first).concat(second);
        break;
      }
      case 7:
      case 8: {
        let first = romanianDictionary.get(5 * divider);
        let second = romanianDictionary.get(1 * divider);
        result = result.concat(first).concat(second.repeat(num - 5));
        break;
      }
      case 9: {
        let first = romanianDictionary.get(1 * divider);
        let second = romanianDictionary.get(10 * divider);
        result = result.concat(first).concat(second);
        break;
      }
    }
    divider /= 10;
  }

  return result;
}

console.log('2511', convertNumberToRomanian(2511));
console.log('999', convertNumberToRomanian(999));
