//Busca o Modulo de Configuracao do servidor
var app = require('./config/server');

//escutar a porta 3000 usando o APP
app.listen(3030, function(){
  console.log('servidor ON!');
});
