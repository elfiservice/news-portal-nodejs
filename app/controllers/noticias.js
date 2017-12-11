module.exports.noticias = function(app, req, res){
  //executa a funcao de conexao do BD q esta no file dbConnection.js
  var connection = app.config.dbConnection();

  //app da aplicacao o segundo app e da pasta app/models/noticiasModel
  var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

  NoticiasDAO.getNoticias(function(error, result){
    //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
    res.render("noticias/noticias", {noticias : result});
  });
};

module.exports.noticia = function(app, req, res) {
  //executa a funcao de conexao do BD q esta no file dbConnection.js
  var connection = app.config.dbConnection();
  var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

  NoticiasDAO.getNoticia(function(error, result){
    //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
    res.render("noticias/noticia", {noticia : result});
  });
};
