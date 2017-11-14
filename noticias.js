//Importar biblioteca HTTP para poder criar uma porta para um navegador (client) venha a poder solicitar (request) uma acao na minha APP
var http = require('http');

//criar um servidor
var server = http.createServer( function(req, res) {

  //resposta para a Request (req) devolvendo esse HTML
  res.end("<html><body>Portal de Noticias</body></html>");



});

//Informando a Porta a ser escutada sera a 3000. so a partir desta e q meu servidor retornara (response) algo o HTML acima
server.listen(3000);
