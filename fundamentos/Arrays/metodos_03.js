const numeros = [10, 20, 30, 40 ]

function paraCadaElemento (elemento, indice, array) {
   console.log(elemento, indice, array)
}

numeros.forEach(paraCadaElemento)

console.log()

numeros.forEach(function (el, i , array) {
     console.log(el, array);
})

console.log()

numeros.forEach(function (_, i , _) {
    console.log(i);
})

console.log()

for(let n of numeros) {
    console.log(n)
}


//'for (let i = 0; i < numeros.length; i++) {
//'    console.log(numeros[i])
//'    
//}

