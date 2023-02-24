let contador = 0;

let contagem = document.querySelector('h1')
let botaoMenos = document.querySelector('#btnMenos')
let botaoMais = document.querySelector('#btnMais')

botaoMenos.addEventListener('click', function () {
    contador--
    atualizar()
})

botaoMais.addEventListener('click', function () {
    contador++
    atualizar()
})

function atualizar() {
    contagem.innerHTML = contador
}