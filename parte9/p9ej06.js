// Promesas

const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 900))

delayed(7)
    .then(x => {
        console.log(x)
        return delayed(x + 7)
    })
    .then(x => console.log(x))
    .catch(e => console.log(e))