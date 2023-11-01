const Produtos = require('../models/Produto')
const conn = require('../db/conn')

module.exports = class ProdutosController{
    static getProduto(req, res){
        try{
            const query = Produtos.selectAll()
            conn.query(query,(error, data)=>{
                if(error){
                    console.log(error)
                    return
                }
                const dataQuery = data
                console.log(dataQuery) 
                res.send(dataQuery)                
            })
                   
        }catch(err){
            res.status(501).send("Erro ao buscar todos dados")
        }
    }

    static getParamsProduto(req, res){
        try{
            const id = req.params.id
            const query = Produtos.selectOne(id)
            conn.query(query,(error, data)=>{
                if(error){
                    console.log(error)
                    return
                }
                const dataQuery = data                
                res.send(dataQuery)
            })
           

        }catch(err){
            res.status(501).send("Erro ao buscar dados")
        }
    }
    
    static postProduto(req,res){
        try{
            const {id, nome, preco } = req.body
            const query = Produtos.insertProduto(id, nome, preco)
            conn.query(query, (err)=>{
                if(err){
                    res.status(501).send("Erro ao salvar dados")
                }
                res.status(201).send('Dados Salvo com sucesso')
            })            
        }catch(err){
            res.status(501).send("Erro ao salvar dados")
        }

    }

    static updateProduto(req, res){        
        try{
            const id = req.params.id
            const nome = req.body.nome
            const preco = req.body.preco
            const query = Produtos.update(id, nome, preco)

            conn.query(query,(err)=>{
                if(err){
                    res.status(500).send('Erro ao atualizar dados')
                    return
                }
                res.send("Dados atualiados com sucesso")
            })
            
        }catch(err){
            console.log(err)
        }
    }

    static deleteProduto(req, res){
        const id = req.params.id

        const query = Produtos.delete(id)

        conn.query(query, (err)=>{
            if(err){
                res.status(501).send("Erro ao deletar dados")
                return
            }
            res.send("Dados deletados com sucesso")
        })
    }

}