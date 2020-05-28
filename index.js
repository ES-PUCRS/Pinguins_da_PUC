/**
 * Alterna a tela de acordo com o parâmetro `rota`.
 * @param {*} rota o nome do arquivo html a ser apontado. Neste projeto, o arquivo html
 * deve estar dentro da pasta `telas`
 */
function navega(rota) {
    const file = `./telas/${rota}.html`
    $("#rota").load(file)
}

function cadastraOperador() {
    const nome = document.getElementById("operador-nome").value
    const cpf = document.getElementById("operador-cpf").value

    const options = document.getElementById("select-operador").options

    options[options.length] = new Option(nome, cpf)
    alert('Operador cadastrado!')
}

function operadorAtivo() {
    const select = document.getElementById("select-operador")

    const obj = select.options[select.selectedIndex]
    return ({
        name: obj.innerHTML,
        value: obj.value
    })
}