function getAverage(numbers) {
  return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}

console.log(getAverage([1, 5, 2, 9, -3]) === 2.8);
