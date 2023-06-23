const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 102 Bloco B',
        PontosRef: [
            { nome: 'Hospital X', muitoProximo: true },
            { nome: 'Shopping Y', muitoProximo: false },
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']

}

console.log(cliente['endereço']['logradouro'])
console.log(cliente.endereço.logradouro)
console.log(cliente.endereço.PontosRef[1].muitoProximo)