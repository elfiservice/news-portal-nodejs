module.exports = function(app) {
  app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
  });

  //usando o metodo post que esta no EJS (HMTL) no form de envio e usando o mesmo caminho noticias/salvar 
  app.post('/noticias/salvar', function(req, res){
    var noticia = req.body;
    res.send(noticia);
  });
};
