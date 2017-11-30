module.exports = function(app) {

  app.get('/noticias', function(req, res){

    //criar a ligacao com o BD MySQL
    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sapato44',
      database: 'portal_noticias'
    });

    //consultas dentro do BD
    connection.query('select * from noticias', function(error, result){
      res.send(result);
    });

    // res.render("noticias/noticias");
  });
};
