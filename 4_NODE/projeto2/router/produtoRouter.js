const express = require('express')
const router = express.Router()
const ProdutosController = require('../controller/ProdutoControllers')

router.get('/', ProdutosController.getProduto)

router.get('/:id', ProdutosController.getParamsProduto)

router.post('/', ProdutosController.postProduto)

router.put('/:id', ProdutosController.updateProduto)

router.delete('/:id', ProdutosController.deleteProduto)



module.exports = router