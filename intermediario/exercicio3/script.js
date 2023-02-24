let contador = 0;

let estadosSelect = document.querySelector('#estados select')
let estadosErro = document.querySelector('#estados .erro')
let cidadesSelect = document.querySelector('#cidades select')
let cidadesErro = document.querySelector('#cidades .erro')
let btnSubmit = document.querySelector('#submit')
let erro = false

let lista = {
    PB: ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Cabedelo'],
    PE: ['Recife', 'Olinda', 'Itambé', 'Barreiros']
}

estadosSelect.innerHTML = '<option value="">-- Selecione o Estado --</option>'
cidadesSelect.innerHTML = '<option value="">-- Selecione o Estado --</option>'

for (estado of Object.keys(lista)) {
    estadosSelect.innerHTML += `<option>${estado}</option>`
}

estados.addEventListener('change', function () {
    estadosErro.innerHTML = ''
    estadosSelect.classList.remove('inputErro')

    if (estadosSelect.value == '') {
        cidadesSelect.innerHTML = '<option value="">-- Selecione o Estado --</option>'
    } else {
        cidadesSelect.innerHTML = '<option value="">-- Selecione a Cidade --</option>'
        for (cidade of lista[estadosSelect.value]) {
            cidadesSelect.innerHTML += `<option>${cidade}</option>`
        }
    }
})

cidades.addEventListener('change', function () {
    cidadesErro.innerHTML = ''
    cidadesSelect.classList.remove('inputErro')
})

btnSubmit.addEventListener('click', function () {
    if (!estadosSelect.value) {
        erro = true
        estadosErro.innerHTML = 'Selecione o Estado'
        estadosSelect.classList.add('inputErro')
    }
    if (!cidadesSelect.value) {
        erro = true
        cidadesErro.innerHTML = 'Selecione a Cidade'
        cidadesSelect.classList.add('inputErro')
    }
    if (!erro) {
        console.log("Deu Tudo Certo!")
    }
})
