module.exports = function(app) {
  //rotas para os links na url faz o GET no URL e chama a VIEW
  app.get('/', function(req, res){
    res.render("home/index");
  });
};
