let contador = 0;

let contagem = document.querySelector('h1')
let botaoMenos = document.querySelector('#btnMenos')
let botaoMais = document.querySelector('#btnMais')
let intervalo

botaoMenos.addEventListener('click', function () {
    clearInterval(intervalo)
    intervalo = setInterval(function () {
        contador--
        atualizar()
    }, 250)
    botaoMenos.classList.add('vermelho')
    botaoMais.classList.remove('verde')
})

botaoMais.addEventListener('click', function () {
    clearInterval(intervalo)
    intervalo = setInterval(function () {
        contador++
        atualizar()
    }, 250)
    botaoMenos.classList.remove('vermelho')
    botaoMais.classList.add('verde')
})

function atualizar() {
    contagem.innerHTML = contador
}