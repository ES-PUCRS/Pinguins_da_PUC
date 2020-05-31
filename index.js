let proximaConta = 10;
let operador;
let contaAtual;

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
    populateOperators()

    const contas = []
    for (let i = 0; i < 10; i ++) {
        contas.push({
            id: i,
            data_de_criacao: new Date(),
            operador: !!operadores[i] ? operadores[i].name : operadorAtivo(),
            saldo: 0,
            movimentacoes: [
                {
                    data: "Sat May 30 2020 21:54:19 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Lucas Nardon",
                    doc: "123",
                    descricao: "Manutenção de computadores",
                    valor: "-8.123,00"
                },{
                    data: "Sat May 30 2020 11:54:19 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Vinicius Bazanella",
                    doc: "45910",
                    descricao: "Compra de Monitores",
                    valor: "-13.200,40"
                },{
                    data: "Sat May 30 2020 23:54:19 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Vinicius Bazanella",
                    doc: "256",
                    descricao: "Fatura 18/2013",
                    valor: "7.430,40"
                },{
                    data: "Sat May 30 2020 22:14:19 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Lucas Nardon",
                    doc: "65196",
                    descricao: "Compra de computador",
                    valor: "-4.500,00"
                },{
                    data: "Sat May 30 2020 17:04:19 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Vinicius Bazanella",
                    doc: "15",
                    descricao: "Compra de impressora 3d",
                    valor: "-2.499,00"
                },{
                    data: "Sat May 30 2020 22:25:19 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Lucas Nardon",
                    doc: "856",
                    descricao: "Compra  impressoras empresa",
                    valor: "-8.699,99"
                },{
                    data: "Sat May 30 2020 13:41:49 GMT-0300 (Horário Padrão de Brasília)",
                    operador: "Vinicius Bazanella",
                    doc: "78954",
                    descricao: "Venda Computadores antigos",
                    valor: "5.920,50"
                }
            ]
        })
    }
 
    localStorage.setItem('contas', JSON.stringify(contas))
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
    populateOperators()

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

// function cadastraMovimento() {
//     const data = document.getElementById("data").value
//     const tipo = document.getElementById("tipo").value
//     const valor = document.getElementById("valor").value
//     const descricao = document.getElementById("descricao").value

//     var tabela = document.getElementById('todos-movimentos');
//     var numeroLinhas = tabela.rows.length;
//     var linha = tabela.insertRow(numeroLinhas);
//     var celula1 = linha.insertCell(0);
//     var celula2 = linha.insertCell(1);
//     var celula3 = linha.insertCell(2);
//     var celula4 = linha.insertCell(3);
//     var celula5 = linha.insertCell(4);
//     celula1.innerHTML = data;
//     celula2.innerHTML = operador;
//     celula3.innerHTML = tipo;
//     celula4.innerHTML = descricao;
//     celula5.innerHTML = 'R$ ' + valor;

//     //adding some style via js

//     linha.style = "border: 1px solid black";
//     celula1.style = "border: 1px solid black";
//     celula2.style = "border: 1px solid black";
//     celula3.style = "border: 1px solid black";
//     celula4.style = "border: 1px solid black";
//     celula5.style = "border: 1px solid black";
// }

function trocaOperador(value) {
    const operadores = JSON.parse(localStorage.getItem('operadores'))
    
    operadores.forEach(e => e.active = (e.cpf == value))

    localStorage.setItem('operadores', JSON.stringify(operadores))
}

function operadorAtivo() {
    const operadores = JSON.parse(localStorage.getItem('operadores'))

    const active = operadores.filter(e => e.active)[0]
    return (active ? active.name : operadores[0].name)
}

function createAccount(){
    let date = new Date;

    const id = document.getElementById('num-conta').value

    let conta = {
        id: id,
        data_de_criacao: date,
        operador: operadorAtivo(),
        saldo: 0,
        movimentacoes: []
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
    const contas = JSON.parse(localStorage.getItem('contas')).map(e => Object.assign(e, {movimentacoes: e.movimentacoes.length}))

    let table = document.getElementById('table-contas');
    table.innerHTML = ''

    let headers = ['ID', 'DATA CRIAÇAO', 'OPERADOR', 'SALDO', 'MOVIMENTAÇOES'];
    generateTableHead(table, headers);
    generateTable(table, contas);
}

function accountSelect(id) {
    const options = document.getElementById(id).options

    const accounts = JSON.parse(localStorage.getItem('contas'))
    accounts.forEach((e, i) => options[i] = new Option(e.id, e.id))
}

function movimento() {
    const id = document.getElementById('conta-origem').value
    
    const accounts = JSON.parse(localStorage.getItem('contas'))
    
    const type = document.getElementById('transfer-type').value
    const doc = document.getElementById('doc').value
    const descricao = document.getElementById('descricao').value
    let value = parseInt(document.getElementById('valor').value)

    if (type == 2) value *= -1

    const movimento = {
        data: new Date().toLocaleDateString(),
        operador: operadorAtivo(),
        doc: doc,
        descricao: descricao,
        valor: value
    }

    accounts
        .filter(e => e.id == id)
        .forEach(e => {
            if (!(type == 2 && e.saldo < Math.abs(value))) {
                e.saldo = e.saldo + value
                e.movimentacoes.push(movimento)

                alert('Movimentação realizada com sucesso.')
            } else {
                alert("Saldo insuficiente para realizar a operação")
            }
        })

    localStorage.setItem('contas', JSON.stringify(accounts))

    showAccountMovements(id, 'conta-movimentos')
}

function transferencia() {
    const from = document.getElementById('conta-origem').selectedIndex
    const to = document.getElementById('conta-destino').selectedIndex

    const value = parseInt(document.getElementById('valorTransferencia').value)

    const accounts = JSON.parse(localStorage.getItem('contas'))

    const movFrom = {
        data: new Date().toLocaleDateString(),
        operador: operadorAtivo(),
        doc: '-',
        descricao: 'Transferência',
        valor: value * -1
    }

    const movTo = {
        data: new Date().toLocaleDateString(),
        operador: operadorAtivo(),
        doc: '-',
        descricao: 'Entrada',
        valor: value
    }

    if (accounts[from].saldo >= value) {
        accounts[from].saldo -= value
        accounts[to].saldo += value

        accounts[from].movimentacoes.push(movFrom)
        accounts[to].movimentacoes.push(movTo)

        localStorage.setItem('contas', JSON.stringify(accounts))

        const id = document.getElementById('conta-origem').value
        showAccountMovements(id, 'conta-movimentos')

        alert("Transferência realizada com sucesso.")
    } else {
        alert("Saldo insuficiente para realizar a operação")
    }
}

function showAccountMovements(idConta, elementRef) {
    const contas = JSON.parse((localStorage.getItem('contas'))).filter(e => e.id == idConta)
    if (contas.length) {
        const mov = contas[0].movimentacoes
     
        const table = document.getElementById(elementRef)
        table.innerHTML = ''
    
        const headers = ['DATA', 'OPERADOR', 'Nº DOC', 'DESCRIÇAO', 'VALOR']
        generateTableHead(table, headers)
        generateTable(table, mov)
    }
}

function showMovements(elementRef) {
    const movimentos = JSON.parse(localStorage.getItem('contas')).map(e => e.movimentacoes)

    let mov = [];
    movimentos.forEach((movimento) => {
        movimento.forEach((m) => mov.push(m))
    })

    const table = document.getElementById(elementRef)
    table.innerHTML = ''
    const headers = ['DATA', 'OPERADOR', 'Nº DOC', 'DESCRICAO', 'VALOR']
    
    generateTableHead(table, headers)
    generateTable(table, mov)
}
