//criando modulo de Configuracao do servidor na nossa APP

//recuprar a biblioteca do express
var express = require('express');

//instanciando o modulo Consign para add as rotas automaticamente de uma so vez
var consign = require('consign');

//instanciando o modulo body-parser instalado usando o NPM npm install body-parser --save
var bodyParser = require('body-parser');

//instancia o modulo expressValidator
var expressValidator = require('express-validator');

//executando a funcao q o modulo do express retorna acima
var app = express();
//informar ao Express q o EJS vai trazer os HTMLS como views
app.set('view engine', 'ejs');
//seta onde vai esta localizada as views a serem pegues
app.set('views', './app/views');

//usando metodo estatico do express - para usar conteudo estatico nas views sem precisar por todo o caminho
app.use(express.static('./app/public'));

//usando o bodyParser na aplicação com a opção extended ativa para usar json
app.use(bodyParser.urlencoded({extended: true}));

//exeutando a funcao do express-validator modulo instalado pelo npm
app.use(expressValidator());

//incluindo todas as ROTAS dentro do nosso projeto var APP, (ele busca todas as rotas dentro de app/routes)
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


//exporta o app para outros arquivos js
module.exports = app;
