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
    document.write('Ok, promise resolvida!')
}

function erroDaPromise() {
    document.write('Xi!! Deu erro')
}

minhaFuncao()
    .then(retornoDaPromise)
    .catch(erroDaPromise)