//criando modulo de Configuracao do servidor na nossa APP

//recuprar a biblioteca do express
var express = require('express');

//executando a funcao q o modulo do express retorna acima
var app = express();

//informar ao Express q o EJS vai trazer os HTMLS como views
app.set('view engine', 'ejs');

//seta onde vai esta localizada as views a serem pegues
app.set('views', './app/views');

//exporta o app para outros arquivos js
module.exports = app;
