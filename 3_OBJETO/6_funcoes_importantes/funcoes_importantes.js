const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
Object.entries(pessoa).map(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)

const dest = {a: 1}
const o2 = { b: 2 }
const o3 = { c:3, a:4 }

const obj = Object.assign(dest, o2, o3)
console.log(obj)

Object.freeze(obj)

obj.c = 1234
console.log(obj)