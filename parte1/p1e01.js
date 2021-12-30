const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mascotas = [
    { nombre: 'Puchini', edad: 12, raza: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, raza: 'perro'},
    { nombre: 'Pulga', edad: 10, raza: 'perro'},
    { nombre: 'Pelusa', edad: 16, raza: 'gato'}
];

// console.log(mascotas, numeros);

// const numerosFiltrados = numeros.filter(x => x < 5);
// console.log(numerosFiltrados);

const perros = mascotas.filter(x => x.raza == 'perro');
const gatos = mascotas.filter(x => x.raza == 'gato');
console.log(perros);
console.log(gatos);
