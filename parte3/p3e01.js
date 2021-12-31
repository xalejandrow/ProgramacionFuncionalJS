// Función reducer
// const reducer = (acumulador, valorActual) => nuevoAcumulador

// const reducido = [1, 2].reduce((acc, el) => acc + el, 0);
// console.log(reducido);

const numeros = [1, 2, 3, 4, 5];
// suma de todos los elementos del arreglo
const resultado = numeros.reduce((acc, el) => acc + el, 0);
// console.log(resultado);

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'}
];

// indexo por el nombre de la mascota
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}),{})

// console.log(indexed);
console.log(indexed['Pelusa']);

const anidado = [1, [2,3], 4, [5]];
// eliminar el anidado

const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);