let listaAtores = [
    {
        nome: 'Keanu Reeves',
        personagem: 'Neo',
        filme: 'The Matrix',
    },
    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episódios IV-VI',
    },
    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - O Início',
    }
]

let boxes = document.querySelector('#boxes')

for (let lista of listaAtores) {
    html = `
        <div>
            <h1>${lista.nome}</h1>
            <p>Interpreta o personagem ${lista.personagem} no filme ${lista.filme}.</p>
        </div>
        `

    boxes.innerHTML += html
}