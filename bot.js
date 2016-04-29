var fs = require('fs');
var path = require('path');
var json = [];


console.log('Carregando Arquivo');
//Carregar
var fileCSV = path.join(__dirname, 'munic.csv');
var dados = fs.readFileSync(fileCSV, {encoding: 'utf-8'}, error);


console.log('Processando dados');

dados = dados.split("\n");


dados.forEach(function(l){
    var base = {}
    var line = l.split(";")
    base['Id'] = line[1];
    base['Estado'] = line[0];
    base['Titulo'] = line[2];
    json.push(base);
});

console.log('Salvando dados');
//Salvar
var pathJSON = path.join(__dirname, 'node.json');
fs.writeFileSync(pathJSON, JSON.stringify(json), 'utf8', error);

console.log('Finalizado');

function error(e){
    console.log('erro:',e);
}