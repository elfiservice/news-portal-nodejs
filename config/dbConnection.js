//criar a ligacao com o BD MySQL
var mysql = require('mysql');

//torna a funcao de conexao com o BD exportavel para ser instanciada em outros arquivos JS
module.exports = function() {
  return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sapato44',
      database: 'portal_noticias'
    });
}
