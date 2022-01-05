// Promesas
const p1 = Promise.resolve(1)

console.log(p1);

p1
 .then(x => x + 5)
 .then(x => Promise.resolve(x + 5))
 .then(x => console.log(x))