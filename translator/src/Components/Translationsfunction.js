const theText = 'hello my name is Giselle';
const toArray = theText.split(' ');

const toSpan = (array) => {
  const results = array.map((word) => word.replace('hello', 'hola'));
  return results.join(' ');
};

console.log(toSpan(toArray));
