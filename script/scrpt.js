const form = document.getElementById('form-atividade')

const imgAprovado = '<img src="./imagens/images/aprovado.png" alt="emoji aprovando" />'
const imgReprovado = '<img src="./imagens/images/reprovado.png" alt="emoji reprovando" />'

let linhas = ''
form.addEventListener('submit', function(e) {
    e.preventDefault()


    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    

    let linha = `<tr>`
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7? imgAprovado : imgReprovado }</td>`
    linha += `</tr>`

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputNomeAtividade = ''
    inputNotaAtividade = ''
})