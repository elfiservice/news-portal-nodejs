module.exports = function(app) {
  app.get('/formulario_inclusao_noticia', function(req, res){
    //instacia o controller (logica) na pasta app/controller/admin.js e a funcao formulario_inclusao_noticia
    app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
  });

  //usando o metodo post que esta no EJS (HMTL) no form de envio e usando o mesmo caminho noticias/salvar
  app.post('/noticias/salvar', function(req, res){
    app.app.controllers.admin.noticias_salvar(app, req, res);
  });

  app.get('/formulario_edicao_noticia', function(req, res){
    //instacia o controller (logica) na pasta app/controller/admin.js e a funcao formulario_inclusao_noticia
    app.app.controllers.admin.formulario_edicao_noticia(app, req, res);
  });
};
