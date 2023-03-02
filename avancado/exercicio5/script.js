function minhaFuncao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 10000)

        // para cair no catch:
        // reject()
    })
}

function retornoDaPromise() {
    console.log('Ok, promise resolvida!')
}

function erroDaPromise() {
    console.log('Xi!! Deu erro')
}

minhaFuncao()
    .then(retornoDaPromise)
    .catch(erroDaPromise)