// Composición
// npm i --save loadsh
const _ = require('loadsh')

const users = [
    { id: 1, nombre: 'nicolas', apellido: 'schurmann'}
]

const getNombreCompleto = (_users) => {
    const primero = _users[0]
    const capitalizados = {
        nombre: _.upperFirst(primero.nombre),
        apellido: _.upperFirst(primero.apellido),
    }
    return `${capitalizados.nombre} ${capitalizados.apellido}`
}

const x = getNombreCompleto(users)
console.log(x);