// Data (dia/mes/ano)

const nascimento = {
    dia:'01',
    mes:'08',
    ano:'1999',
    metodoExibir: function () {
       return `exibir ${this.dia}/${this.mes}/${this.ano} `
    }
}

console.log(nascimento.metodoExibir()) 