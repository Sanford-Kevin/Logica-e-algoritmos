function MeuSalario(horas, pagamentoHora) {
    this.horas = horas;
    this.pagamentoHora = pagamentoHora;

    this.Calculo= function() {
        return `Salario igual a R$ ${this.horas * this.pagamentoHora}`
    }
}

const p1 = new MeuSalario(150, 40.50)

console.log(p1.Calculo())