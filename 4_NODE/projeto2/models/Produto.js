const conn = require('../db/conn')

module.exports = class Produtos{
    static selectAll(){
        const query = `SELECT * FROM produtos.create_produto;`
        return query        
    }

    static selectOne(id){
        const query = `SELECT * FROM produtos.create_produto WHERE id = ${id};`
        return query
    }

    static insertProduto(id, nome, preco){
      const query = `INSERT INTO produtos.create_produto (nome, preco) VALUES ( "${nome}", ${preco});`
      return query
    }
    
    static update(id, nome, preco){
        const query = `update produtos.create_produto SET nome = "${nome}", preco = "${preco}" WHERE id = ${id} ;`
        return query
    }

    static delete(id){
        const query = `DELETE FROM produtos.create_produto WHERE id = ${id};`
        return query
    }
}