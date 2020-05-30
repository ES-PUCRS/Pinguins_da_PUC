let proximaConta = 10;
let operador;

window.onload = () =>{
     const operadores = []
     localStorage.setItem("operadores", JSON.stringify(operadores))
}

/**
 * Alterna a tela de acordo com o parâmetro `rota`.
 * @param {*} rota o nome do arquivo html a ser apontado. Neste projeto, o arquivo html
 * deve estar dentro da pasta `telas`
 */

 window.onload = () => {
    const operadores = [
        {
            name: 'Vinicius Bazanella',
            cpf: '123123',
            active: false
        },
        {
            name: 'Cleyson Oliveira',
            cpf: '123124',
            active: false
        },
        {
            name: 'Lucas Nardon',
            cpf: '123125',
            active: false
        },
        {
            name: 'Diego Klein',
            cpf: '123126',
            active: false
        },
        {
            name: 'Lucas Cardoso',
            cpf: '123127',
            active: false
        },
        {
            name: 'Gustavo Gallarreta',
            cpf: '123128',
            active: false
        },
        {
            name: 'Lucas Teixeira',
            cpf: '123129',
            active: false
        }
    ]

    localStorage.setItem('operadores', JSON.stringify(operadores))

    const contas = []
    for (let i = 0; i < 10; i ++) {
        contas.push({
            id: i,
            data_de_criacao: new Date(),
            operador: !!operadores[i] ? operadores[i].name : operadorAtivo(),
            saldo: 0,
            movimentações: []
        })
    }
 
    localStorage.setItem('contas', JSON.stringify(contas))
    console.log(JSON.parse(localStorage.getItem('contas')))
    operador = operadores[0].name
}

function navega(rota) {
    const file = `./telas/${rota}.html`
    $("#rota").load(file)
}

function populateOperators() {
    const operadores = JSON.parse(localStorage.getItem('operadores'))

    const options = document.getElementById('select-operador').options
    operadores.forEach((e, i) => {
        options[i] = new Option(e.name, e.cpf, e.active, e.active)
    })
}

function cadastraOperador() {
    const operators = JSON.parse(localStorage.getItem('operadores'))

    const name = document.getElementById('operador-nome').value
    const cpf = document.getElementById('operador-cpf').value

    operators.push({name: name, cpf: cpf, active: false})

    localStorage.setItem('operadores', JSON.stringify(operators))

    alert('Operador cadastrado.')
}

function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
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

function trocaOperador(value) {
    const operadores = JSON.parse(localStorage.getItem('operadores'))
    
    operador = operadores.forEach(e => e.active = (e.cpf == value))
    console.log(operador)

    localStorage.setItem('operadores', JSON.stringify(operadores))
}

function operadorAtivo() {
    const operadores = JSON.parse(localStorage.getItem('operadores'))

    const active = operadores.filter(e => e.active)[0]
    operador = active.name;
    console.log(operador)
    return (active ? active.name : operadores[0].name)
}

function createAccount(){
    let date = new Date;

    const id = document.getElementById('num-conta').value

    let conta = {
        id: id,
        data_de_criacao: date,
        operador: operador,
        saldo: 0,
        movimentações: []
    }

    let contas = JSON.parse(localStorage.getItem('contas'))
    contas.push(conta);
    localStorage.setItem('contas', JSON.stringify(contas))
    alert(`Conta ${id} cadastrada!`)

    populateAccounts()
}

function closeModal(){
    document.getElementById('modal').style.display = 'none';
}

function openModal(){
    document.getElementById('modal').style.display = 'flex';
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function populateAccounts() {
    const contas = JSON.parse(localStorage.getItem('contas'))

    let table = document.getElementById('table-contas');
    table.innerHTML = ''

    let headers = ['ID', 'DATA CRIAÇAO', 'OPERADOR', 'SALDO', 'MOVIMENTAÇOES'];
    generateTableHead(table, headers);
    generateTable(table, contas);
}

function transfereSaldo (conta, valor) {
    console.log(conta, valor);


}