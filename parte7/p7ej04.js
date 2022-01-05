// Composición
// npm i --save loadsh
const _ = require('loadsh')

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const users = [
    { id: 1, nombre: 'nicolas', apellido: 'schurmann'}
]

const head = x => x[0]
const capitalizarNombreYApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido),
})
const generaNombre = x => `${x.nombre} ${x.apellido}`

// const getNombreCompleto = (_users) => 
//     compose(generaNombre, capitalizarNombreYApellido, head)(_users)

// programación tácita o point free
const getNombreCompleto = compose(generaNombre, capitalizarNombreYApellido, head)

const x = getNombreCompleto(users)
console.log(x);