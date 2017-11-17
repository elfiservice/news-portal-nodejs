//recuprar a biblioteca do express
var express = require('express');
//executando a funcao q o modulo do express retorna acima
var app = express();

//informar ao Express q o EJS vai trazer os HTMLS como views
app.set('view engine', 'ejs');
//apos informar ao Express q o EJS vai ter as views HTML,
//uso o metodo Render para buscar na pasta views o arquivo .ejs com o HTML/javascript
app.get('/tecnologia', function(req, res){
  res.render("secao/tecnologia");
});

//rotas para os links na url
app.get('/', function(req, res){
  res.send("<html><body>Portal de Noticias</body></html>");
});

//escutar a porta 3000 usando o APP
app.listen(3000, function(){
  console.log("Servidor rodando com express");
});
