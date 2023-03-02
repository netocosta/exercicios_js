const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const alunosFinal = aluno.notas.reduce((acc, curr) => {
    acc.contador++
    acc.soma += curr

    return acc
}, {
    soma: 0,
    contador: 0,
})

const nomeAluno = `${aluno.nome} ${aluno.sobrenome}`
const { soma, contador } = alunosFinal
const media = soma / contador

document.write(`A média da ${nomeAluno} foi ${media} para o total de ${contador} bimestres.`)