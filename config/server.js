//criando modulo de Configuracao do servidor na nossa APP

//recuprar a biblioteca do express
var express = require('express');

//instanciando o modulo Consign para add as rotas automaticamente de uma so vez
var consign = require('consign');

//executando a funcao q o modulo do express retorna acima
var app = express();

//informar ao Express q o EJS vai trazer os HTMLS como views
app.set('view engine', 'ejs');

//seta onde vai esta localizada as views a serem pegues
app.set('views', './app/views');

//incluindo todas as ROTAS dentro do nosso projeto var APP, (ele busca todas as rotas dentro de app/routes)
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);


//exporta o app para outros arquivos js
module.exports = app;
