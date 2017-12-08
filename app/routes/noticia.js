module.exports = function(app) {

  app.get('/noticia', function(req, res){

    //executa a funcao de conexao do BD q esta no file dbConnection.js
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticia(function(error, result){
      //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
      res.render("noticias/noticia", {noticia : result});
    });
  });
};
