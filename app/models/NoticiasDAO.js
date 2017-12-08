function NoticiasDAO(connection) {
  this._connection = connection;
}

  NoticiasDAO.prototype.getNoticias = function(callback) {
    //consultas dentro do BD
    this._connection.query('select * from noticias', callback);
  }

  NoticiasDAO.prototype.getNoticia = function(callback) {
    //consultas dentro do BD
    this._connection.query('select * from noticias WHERE id_noticias = 2', callback);
  }

  NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    //usando a instrução SET na string de SQL para identificar o JSON em noticia e substituier a "?"
    //NOTA: o nome dos inputs no HTML tem q ser o mesmo do nome da coluna na Tabela do BD
    this._connection.query('insert into noticias set ? ', noticia, callback);
  }


module.exports = function() {
  return NoticiasDAO;
}
