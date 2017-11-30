//Busca o Modulo de Configuracao do servidor
var app = require('./config/server');

//apos informar ao Express q o EJS vai ter as views HTML,
//uso o metodo Render para buscar na pasta views o arquivo .ejs com o HTML/javascript
app.get('/tecnologia', function(req, res){
  res.render("secao/tecnologia");
});

//requisita o modulo HOME para buscar a view Home
var rotaHome = require('./app/routes/home');
//executa o modulo home em routes
rotaHome(app);

var rotaFormInclusaoNoticias = require('./app/routes/form_inclusao_noticia')(app);

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);


//escutar a porta 3000 usando o APP
app.listen(3030, function(){

  console.log('servidor ON!');
});
