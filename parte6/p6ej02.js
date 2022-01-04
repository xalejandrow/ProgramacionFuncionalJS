// Clousures
// Para que funcione necesito instalar 
// npm install --save isomorphic-fetch
require('isomorphic-fetch')

const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`

    return({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x),
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
    })
}

const Base = crudder('https://jsonplaceholder.typicode.com')
const Todos = Base('todos')
const Users = Base('users')

// Todos.get().then(console.log)
Todos.get().then(x => console.log(x[0]))
Users.get().then(x => console.log(x[0]))