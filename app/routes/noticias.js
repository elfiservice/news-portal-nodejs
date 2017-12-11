//cria a conexao com o BAnco de Dados pegando da pasta config o Js dbConnection q tem as config de conexao
// var dbConnection = require('../../config/dbConnection.js');
module.exports = function(app) {

  app.get('/noticias', function(req, res){
    app.app.controllers.noticias.noticias(app, req, res);
  });

  app.get('/noticia', function(req, res){
    app.app.controllers.noticias.noticia(app, req, res);
  });
};
