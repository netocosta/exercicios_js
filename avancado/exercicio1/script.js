const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
    },
    {
        nome: 'Pedro',
        sobrenome: 'Souza',
    }
]

const alunosFinalForEach = []
alunos.forEach((item) => {
    alunosFinalForEach.push(`${item.nome} ${item.sobrenome}`)
})
console.log(alunosFinalForEach)

const alunosFinalMap = alunos.map((item) => {
    return `${item.nome} ${item.sobrenome}`
})
console.log(alunosFinalMap)