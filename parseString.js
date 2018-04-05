function parseString(string) {
  return string.split(/\s(?=[a-zA-Z])/).map(value => {
    let [name, id] = value.split(' ');
    return { name, id };
  });
}

console.log(parseString('red 1 yellow 2 black 3 white 4'));
