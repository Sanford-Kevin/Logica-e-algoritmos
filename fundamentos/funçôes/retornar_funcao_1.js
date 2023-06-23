function retornaUmaFuncao() {

    function bomDia() {
        return function () {
            return "Boa tarde"
        }
    }
    return bomDia;
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()())
console.log(retornaUmaFuncao()()())
const umaFuncao = retornaUmaFuncao()()()
console.log(umaFuncao);
