module.exports = function(app) {
  app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
  });

  //usando o metodo post que esta no EJS (HMTL) no form de envio e usando o mesmo caminho noticias/salvar
  app.post('/noticias/salvar', function(req, res){
    var noticia = req.body;

    //usando os metodos do express-validator usando o .assert()
    //para o titulo no primeiro param. é o name do input do HTML e no segundo parm. é a mensg d error
    //seguido do metodo de teste .notEmpty() informand q nao pode ser vazio
    req.assert('titulo','Título é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrig').notEmpty();
    req.assert('resumo','Resumo deve ter entre 10 e 100 caracter').len(10,100);
    req.assert('data','Data obrigatoria').notEmpty();
    req.assert('noticia','Noticia é obrigatoria').notEmpty();

    //recurpera os testes de Erros acima e vertifica se houve, se sim, retona para pagina de formulario e nao inseri.
    var erros = req.validationErrors();
    if(erros) {
      res.render("admin/form_add_noticia");
      return;
    }

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
