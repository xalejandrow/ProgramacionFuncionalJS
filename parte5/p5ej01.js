// Trampolines, para evitar error Maximum call stack size exceeded
const suma = (number, sum = 0) => (
    number === 0
    ? sum 
    : suma(number -1, sum + number)
)
// 
// const r = suma(10000)
console.log(r);