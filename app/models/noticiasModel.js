module.exports = function() {

  this.getNoticias = function(connection, callback) {
    //consultas dentro do BD
    connection.query('select * from noticias', callback);
  }

  this.getNoticia = function(connection, callback) {
    //consultas dentro do BD
    connection.query('select * from noticias WHERE id_noticias = 2', callback);
  }

  return this;
}
