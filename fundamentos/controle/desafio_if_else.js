const a = 10;
const b = 28;
const operacao = "z"; // + - * / %
let resultado

if (operacao === "+") {
    resultado = a + b;
} else if (operacao === "-"){
    resultado = a - b;
} else if (operacao === "*"){
    resultado = a * b;
} else if (operacao === "/"){
    resultado = a / b;
} else if (operacao === "%") {
    resultado = a % b
} else {
    resultado = "Invalido!"
}

console.log(resultado)