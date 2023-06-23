function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,

        Exibir: function () {
            return `exibir ${this.dia}/${this.mes}/${this.ano} `
        }
    };
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(3, 4, 2022);

console.log(d1.Exibir());
console.log(d2.Exibir());
console.log(d3.Exibir());