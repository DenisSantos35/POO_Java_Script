//coleçção dinamica de pares chave/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.nome
delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            numero: 123,
            rua: 'centro'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}
carro.proprietario.numero = 1000
console.log(carro.proprietario.endereco.numero)
console.log(carro.proprietario.endereco)

delete carro.condutores
delete carro.calcularValorSeguro
delete carro.endereco

console.log(carro)
console.log(carro.condutores) // retrona undefined


try{
    console.log(carro.condutores.length) // retorna erro pois não tem como acessar algo que não existe
}catch(err){
    console.log('Valor inseistente')
}