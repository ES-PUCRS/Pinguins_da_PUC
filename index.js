/**
 * Alterna a tela de acordo com o parâmetro `rota`.
 * @param {*} rota o nome do arquivo html a ser apontado. Neste projeto, o arquivo html
 * deve estar dentro da pasta `telas`
 */

const operador = document.getElementById("select-operador").innerHTML

function navega(rota) {
    const file = `./telas/${rota}.html`
    $("#rota").load(file)
    if (rota === "relatorio-geral") {
        generateTableScreen();
    }
}

function cadastraOperador() {
    const nome = document.getElementById("operador-nome").value
    const cpf = document.getElementById("operador-cpf").value

    const options = document.getElementById("select-operador").options

    options[options.length] = new Option(nome, cpf)
    alert('Operador cadastrado!')
}

function cadastraMovimento() {
    const data = document.getElementById("data").value
    const tipo = document.getElementById("tipo").value
    const valor = document.getElementById("valor").value
    const descricao = document.getElementById("descricao").value

    var tabela = document.getElementById('todos-movimentos');
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    celula1.innerHTML = data;
    celula2.innerHTML = operador;
    celula3.innerHTML = tipo;
    celula4.innerHTML = descricao;
    celula5.innerHTML = 'R$ ' + valor;

    //adding some style via js

    linha.style = "border: 1px solid black";
    celula1.style = "border: 1px solid black";
    celula2.style = "border: 1px solid black";
    celula3.style = "border: 1px solid black";
    celula4.style = "border: 1px solid black";
    celula5.style = "border: 1px solid black";
}

function operadorAtivo() {
    const select = document.getElementById("select-operador")

    const obj = select.options[select.selectedIndex]
    return ({
        name: obj.innerHTML,
        value: obj.value
    })
}

function mostrarMovimento(){

    if(document.getElementById('form').style.display == 'none'){
        document.getElementById('form').style.display = 'block';
    }else if(document.getElementById('form').style.display == 'block'){
        document.getElementById('form').style.display = 'none';
    }

}

function createAccount(){
    let date = new Date;

    let conta = {
        id: Math.random(),
        data_de_criacao: date,
        operador: operador,
        saldo: 0,
        movimentações: []
    }

    alert(conta)
    // Integrar esta parte com a persistencia de dados
}

function closeModal(){
    document.getElementById('modal').style.display = 'none';
}

function openModal(){
    document.getElementById('modal').style.display = 'flex';
}