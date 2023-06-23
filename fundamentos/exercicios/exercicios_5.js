function NumeroMaior(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    this.exibir = function () {
        if (typeof n1 === 'number' && typeof n2 === 'number') {
            return n1 > n2;
        } else {
            return false;
        }
    }
}
const i1 = new NumeroMaior('3', 1)

console.log(i1.exibir())