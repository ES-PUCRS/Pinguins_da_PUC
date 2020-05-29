/** MOCK DE DADOS */
// var relatorios;

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'relatorio.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function(response) {
        relatorios = JSON.parse(response);
    });
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

function generateTableScreen() {
    fetch("relatorio.json")
        .then(res => res.json())
        .then(res => {
            let table = document.querySelector("table");
            let data = Object.keys({
                Data: "1",
                Operador: "1",
                NroDoc: "1",
                Descricao: "1",
                Valor: "1"
            });
            // generateTableHead(table, data);
            generateTable(table, res);
        })
}



// .then(() => console.log(relatorios))
// .then(res => { debugger });

// let table = document.querySelector("table");
// let data = Object.keys({
//     Data: "1",
//     Operador: "1",
//     NroDoc: "1",
//     Descricao: "1",
//     Valor: "1"
// });
// generateTableHead(table, data);
// generateTable(table, relatorios);