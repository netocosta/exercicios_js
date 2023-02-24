let nome = prompt("Digite o seu Nome:")
let idade = parseInt(prompt("Digite a sua idade:"))

let string = `Olá ${nome}, `

if (idade >= 18) {
    string += 'você é maior de idade!'
} else {
    string += 'você é menor de idade!'
}

if (nome.toLowerCase() == 'thomas anderson') {
    string += ' Você é um personagem do filme The Matrix!'
}

document.write(string)