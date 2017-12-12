module.exports.index = function(app, req, res){

  //executa a funcao de conexao do BD q esta no file dbConnection.js
  var connection = app.config.dbConnection();
  //app da aplicacao o segundo app e da pasta app/models/noticiasModel
  var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

  NoticiasDAO.get5ultimasNoticias(function(error, result) {
    res.render("home/index", {noticias: result});
  });

};
