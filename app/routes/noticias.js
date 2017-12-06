//cria a conexao com o BAnco de Dados pegando da pasta config o Js dbConnection q tem as config de conexao
// var dbConnection = require('../../config/dbConnection.js');
module.exports = function(app) {

  app.get('/noticias', function(req, res){

    //executa a funcao de conexao do BD q esta no file dbConnection.js
    var connection = app.config.dbConnection();

    //app da aplicacao o segundo app e da pasta app/models/noticiasModel
    var noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function(error, result){
      //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
      res.render("noticias/noticias", {noticias : result});
    });

  });
};
