// Data (dia/mes/ano)

const d1 = {
    dia:'01',
    mes:'08',
    ano:'1999',
    metodoExibir: function () {
       return `${this.dia}/${this.mes}/${this.ano} `
    }
};

const d2 = {
    dia:'22',
    mes:'11',
    ano:'2023',
    metodoExibir: function () {
       return `${this.dia}/${this.mes}/${this.ano} `
    }
};

const d3 = {
    dia:'03',
    mes:'04',
    ano:'2022',
    metodoExibir: function () {
       return `${this.dia}/${this.mes}/${this.ano} `
    }
};

console.log(d1.metodoExibir())
console.log(d2.metodoExibir())
console.log(d3.metodoExibir())