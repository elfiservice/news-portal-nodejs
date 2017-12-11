module.exports = function(app) {
  //rotas para os links na url faz o GET no URL e chama a VIEW
  app.get('/', function(req, res){
    app.app.controllers.home.index(app, req, res);
  });
};
