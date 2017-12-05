//criar a ligacao com o BD MySQL
var mysql = require('mysql');

var connMySQL = function() {
  console.log('conexao estabelecida no dbConnection.js');
  return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sapato44',
      database: 'portal_noticias'
    });
}

//torna a funcao de conexao com o BD exportavel para ser instanciada em outros arquivos JS
module.exports = function() {
  console.log('o autoload foi carregado dbConnection.js');
  return connMySQL;
}
