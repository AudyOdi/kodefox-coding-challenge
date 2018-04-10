function peopleInTheBus(sequences) {
  return sequences.reduce((peopleLeft, [peopleIn, peopleOut]) => {
    return peopleLeft + peopleIn - peopleOut;
  }, 0);
}

console.log(
  `peopleInTheBus([[5, 0], [3, 1], [1, 3]])`,
  peopleInTheBus([[5, 0], [3, 1], [1, 3]]),
);
