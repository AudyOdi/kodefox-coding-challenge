let getNumberDivisor = number => {
  return Array.from({ length: number - 1 }, (v, i) => i + 2).reduce(
    (totalDivisor, currentVal) => {
      if (number % currentVal === 0) {
        return totalDivisor + 1;
      }
      return totalDivisor;
    },
  );
};

console.log('getNumberDivisor(12)', getNumberDivisor(12));
