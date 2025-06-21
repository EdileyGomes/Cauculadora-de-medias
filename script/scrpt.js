const form = document.getElementById('form-atividade')

const atividades = []
const notas = []

const imgAprovado = '<img src="./imagens/images/aprovado.png" alt="emoji aprovando" />'
const imgReprovado = '<img src="./imagens/images/reprovado.png" alt="emoji reprovando" />'

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = ''

const notaMinima = parseFloat(prompt("Digite a nota Mínima: "))

form.addEventListener('submit', function(e) {
    e.preventDefault()


    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
    calculaMediaFinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A Atividade ${inputNomeAtividade.value}, já foi inserida!!!`)
    } else {
        atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = `<tr>`
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima? imgAprovado : imgReprovado }</td>`
    linha += `</tr>`

    linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    
    return somaDasNotas/notas.length
}