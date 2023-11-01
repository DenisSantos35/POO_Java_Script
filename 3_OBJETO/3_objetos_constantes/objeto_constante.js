// pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...} para constante isso não é possivel
try{
    pessoa = {nome: 'Ana'}
}catch(err){
    console.log('nao pode atribuir valor para constante')
}

Object.freeze(pessoa) // aque congelamos o objeto por inteiro ou seja não conseguimos mais mudar os atributos

pessoa.nome = "Maria"
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

// criando objeto variavel e objeto constante

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)