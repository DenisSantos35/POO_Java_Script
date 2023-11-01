const express = require('express')
const port = 3000
const conn = require('./db/conn')
const produtosRouter = require('./router/produtoRouter')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/produtos', produtosRouter)

conn.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    app.listen(port, ()=> console.log(`Servidor conectado na porta ${port}`))
})

