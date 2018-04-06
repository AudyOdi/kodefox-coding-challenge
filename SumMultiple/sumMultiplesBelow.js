function sumMultiplesBelow(max) {
  return Array.from({ length: max }, (v, i) => i).reduce((total, number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      return total + number;
    }
    return total;
  }, 0);
}

console.log('sumMultiplesBelow(10)', sumMultiplesBelow(10));
