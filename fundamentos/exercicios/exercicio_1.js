function Comprimentar(nome) {
    this.nome = nome
    this.exibir = function () {
        return 'Olá ' + this.nome + '!'
    }
}

const pessoa1 = new Comprimentar("Fernanda")
//pessoa1.nome= "Fernanda"

console.log(pessoa1.exibir())