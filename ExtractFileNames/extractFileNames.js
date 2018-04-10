function getFileName(path) {
  let splittedPath = path.split('/');
  let storedFileName = splittedPath[splittedPath.length - 1];

  let [storedName, storedExtension] = storedFileName.split('.');

  let extension = storedExtension.replace('__', '');

  let [salt, timestamp, ...restOfName] = storedName.split('-').reverse();
  let filename = restOfName.reverse().join('-');

  return `${filename}.${extension}`;
}

console.log(
  'getFileName',
  getFileName('/data/uploads/Weekly-Sales-1522577812464-nt7a8reuxp.__xls'),
);
