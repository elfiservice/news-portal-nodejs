module.exports = function(app) {

  app.get('/noticia', function(req, res){

    //executa a funcao de conexao do BD q esta no file dbConnection.js
    var connection = app.config.dbConnection();

    //consultas dentro do BD
    connection.query('select * from noticias WHERE id_noticias = 2', function(error, result){
      //res.send(result);

      //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
      res.render("noticias/noticia", {noticia : result});
    });

    // res.render("noticias/noticias");
  });
};
