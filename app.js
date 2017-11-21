//Busca o Modulo de Configuracao do servidor
var app = require('./config/server');

//apos informar ao Express q o EJS vai ter as views HTML,
//uso o metodo Render para buscar na pasta views o arquivo .ejs com o HTML/javascript
app.get('/tecnologia', function(req, res){
  res.render("secao/tecnologia");
});

//rotas para os links na url
app.get('/', function(req, res){
  res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
  res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
  res.render("noticias/noticias");
});

//escutar a porta 3000 usando o APP
app.listen(3030, function(){

  console.log('servidor ON!');
});
