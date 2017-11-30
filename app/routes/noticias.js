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
      //res.send(result);
      
      //seleciona a View q vai ser renderizado e passa o Json com o resultado para ser usado no HTML da view
      res.render("noticias/noticias", {noticias : result});
    });

    // res.render("noticias/noticias");


  });
};
