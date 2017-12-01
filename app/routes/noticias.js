//cria a conexao com o BAnco de Dados pegando da pasta config o Js dbConnection q tem as config de conexao
var dbConnection = require('../../config/dbConnection.js');

module.exports = function(app) {

  //executa a funcao de conexao do BD
  var connection = dbConnection();

  app.get('/noticias', function(req, res){

    //consultas dentro do BD
    connection.query('select * from noticias', function(error, result){
      //res.send(result);

      //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
      res.render("noticias/noticias", {noticias : result});
    });

    // res.render("noticias/noticias");
  });
};
