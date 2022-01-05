// Composición
// npm i --save loadsh
const _ = require('loadsh')

const users = [
    { id: 1, nombre: 'nicolas', apellido: 'schurmann'}
]

const head = x => x[0]
const capitalizarNombreYApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido),
})
const generaNombre = x => `${x.nombre} ${x.apellido}`

const getNombreCompleto = (_users) => 
    generaNombre(capitalizarNombreYApellido(head(_users)))


const x = getNombreCompleto(users)
console.log(x);