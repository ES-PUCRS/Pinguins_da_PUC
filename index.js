/**
 * Alterna a tela de acordo com o parâmetro `rota`.
 * @param {*} rota o nome do arquivo html a ser apontado. Neste projeto, o arquivo html
 * deve estar dentro da pasta `telas`
 */
function navega(rota) {
    const file = `./telas/${rota}.html`
    $("#rota").load(file)
}