const a = 1
const b = 2
const c = 3

const obj1 = {a,b,c}
console.log(obj1)

obj1.a = 4
console.log(obj1)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao2: function(){
        // ...
    },
    funcao1(){
        // ...
    }
}

console.log(obj5)