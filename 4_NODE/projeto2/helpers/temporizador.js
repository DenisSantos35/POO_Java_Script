const schedule = require('node-schedule')
const Produto = require('../models/Produto')
const conn = require('../db/conn')

const relatorio = schedule.scheduleJob('*/5*16**2', function(){
    console.log("Executando Tarefa 1!", )
    
}) //de 5 em 5 segundo(*/5, qualquer min (*) as 16horas (16)dia do mes (*)qualquer mes (*) 2 = terca

/*
setTimeout(function(){
    relatorio.cancel()
    console.log("Cancelando tarefa 1")
}, 20000)
*/
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 16
regra.second = 5

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds)
    setTimeout(function(){
        const query = Produto.selectAll()
        conn.query(query,(err,data)=>{
            if(err){
                console.log(err)
            }
            console.log(data)
        }), new Date().getSeconds()
    })
} )