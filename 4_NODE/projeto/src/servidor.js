const express = require('express')
const porta = 3000

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/produtos', (req, res, next)=>{
    res.send({nome:'Notebook', preco: 123.45})
})

app.listen(porta, ()=> console.log(`Servidor executando na porta ${3000}`))