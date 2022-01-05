require('isomorphic-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(x => console.log(x))


// Antes se hacía así:
// $.get('https://jsonplaceholder.typicode.com/users', (res) => {
//     if (err) throw err
//     $.get('https://jsonplaceholder.typicode.com/posts', (res) => {
//         if (err) throw err
//     })
// })