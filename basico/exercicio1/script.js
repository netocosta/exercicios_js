let nome = prompt("Digite o seu Nome:")
let idade = parseInt(prompt("Digite a sua idade:"))

let string = `Olá ${nome}, `

if (idade >= 18) {
    string += 'você é maior de idade!'
} else {
    string += 'você é menor de idade!'
}

document.write(string)