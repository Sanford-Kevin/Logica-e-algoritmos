function executar(fn, n1 = 10, n2 = 20) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b
}

executar(somar, 90, 50)
executar(somar)
executar(subtrair, 90, 50)
executar(subtrair)
executar(multiplicar, 90, 50)
executar(multiplicar)
console.log(subtrair(90, 50))

