module.exports = function(app) {
  app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
  });

  //usando o metodo post que esta no EJS (HMTL) no form de envio e usando o mesmo caminho noticias/salvar
  app.post('/noticias/salvar', function(req, res){
    var noticia = req.body;

    //executa a funcao de conexao do BD q esta no file dbConnection.js
    var connection = app.config.dbConnection();

    //app da aplicacao o segundo app e da pasta app/models/noticiasModel
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.salvarNoticia(noticia, function(error, result){
      //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
      res.redirect('/noticias');
    });

  });
};
