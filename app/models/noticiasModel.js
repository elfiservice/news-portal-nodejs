module.exports = function() {

  this.getNoticias = function(connection, callback) {
    //consultas dentro do BD
    connection.query('select * from noticias', callback);
  }

  this.getNoticia = function(connection, callback) {
    //consultas dentro do BD
    connection.query('select * from noticias WHERE id_noticias = 2', callback);
  }

  this.salvarNoticia = function(noticia, connection, callback) {
    //usando a instrução SET na string de SQL para identificar o JSON em noticia e substituier a "?"
    //NOTA: o nome dos inputs no HTML tem q ser o mesmo do nome da coluna na Tabela do BD
    connection.query('insert into noticias set ? ', noticia, callback);
  }

  return this;
}
