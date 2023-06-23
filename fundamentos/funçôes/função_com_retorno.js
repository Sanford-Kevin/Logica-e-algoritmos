function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
   // return retornaTexto ? "Sou um texto!" : 123;
    if(retornaTexto) { 
        return "Sou um texto!"
    } 
    return 123

}



let valor = sempreRetornaUm();
console.log(valor);

console.log(sempreRetornaUm())

let resultado = textoOuNumero(false)
console.log(resultado)

console.log(textoOuNumero(true))