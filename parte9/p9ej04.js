// Promesas

const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 500))

delayed(7)
    .then(x => console.log(x))