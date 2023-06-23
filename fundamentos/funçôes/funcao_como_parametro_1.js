function executar(funcao) {
    if (typeof funcao === "function") {
        console.log(funcao());
    } else {
        console.log("Não é uma função")
    }
}

function bomDia() {
    return "Bom dia";
}

executar(3);
executar(bomDia);

const x = bomDia
const y = bomDia()

console.log(x())
console.log(y)