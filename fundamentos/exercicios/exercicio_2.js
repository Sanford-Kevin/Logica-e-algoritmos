function IdadeEmDias (idade) {
    this.idade = idade
    this.converção = function() {
        return this.idade * 365
    }
}

const p1 = new IdadeEmDias(25)

console.log(p1.converção())