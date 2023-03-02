const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4,
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7,
    },
    {
        nome: 'Sara',
        sobrenome: 'Souza',
        nota: 5,
    },
    {
        nome: 'Clara',
        sobrenome: 'Barbosa',
        nota: 9,
    },
    {
        nome: 'Rodrigo',
        sobrenome: 'Barros',
        nota: 4,
    },
    {
        nome: 'Renato',
        sobrenome: 'Barros',
        nota: 7,
    },
    {
        nome: 'Andrea',
        sobrenome: 'Batista',
        nota: 6,
    },
    {
        nome: 'Carla',
        sobrenome: 'Campos',
        nota: 3,
    }
]


const lista = document.querySelector('#lista')
const nota = document.querySelector("#nota")
const botao = document.querySelector("#botao")

botao.onclick = botao_click

function botao_click() {
    let html = ''

    const alunosFiltrados = alunos.filter((item) => {
        return item.nota == nota.value ? true : false;
    })

    if (alunosFiltrados.length === 0) {
        html += `<li>Nenhum aluno atende ao filtro especificado.</li>`
    }

    alunosFiltrados.forEach((item) => {
        html += `<li>${item.nome} | Nota: ${item.nota}</li>`
    })

    lista.innerHTML = html
}