// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em js

const obj2 = new Object
console.log(typeof Object, typeof new Object())
console.log(obj2)

// Funçoes contrutoras
function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = ()=>{
        return preco * (1 - desc)
    }
}

const produto = new Produto("Bolacha", 50.00, 0.50)
const produto2 = new Produto("Notebook", 2998.99, 0.25)
console.log(produto.getPrecoComDesconto(), produto2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Denis', 8000, 4)

const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.nome, f1.getSalario(),f2.nome, f2.getSalario())

// Object.create
const filha = Object.create(null)

filha.nome = 'Ana'
console.log(filha)

//Rma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)