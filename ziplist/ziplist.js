const a = [1, 2, 3];
const b = ['a', 'b', 'c'];

function ziplist(array1, array2) {
  const final = [];
  for (let i = 0; i < array1.length; i++) {
    final.push(array1[i]);
    final.push(array2[i]);
  }
  return final;
}

console.log(ziplist(a, b));

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

console.log(zipListTheSimpleWay(a, b));
