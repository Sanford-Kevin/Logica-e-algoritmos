const n1 = 10;
const n2 = 3.1;
const n3 = 2.7;

function menorNumero() {
    return Math.min(n1, n2, n3);
}

const i = menorNumero();


function media1(a,b,c) {
  return (a+b+c-i) / 2
}

const z = media1(n1,n2,n3)

console.log(z);

//const m = media1(n1,n2,n3)
//console.log(media1(m))

function mediaParaStatus(media) {
    if(media <= 10 && media >= 7 ) {
        return "Aprovado!"
    } else if (media <= 6.9 && media >= 4.1) {
        return "Recuperação!"
    } else if (media <= 4 && media >=0) {
        return "Reprovado!"
    } else {
        return 'Valor invalido'
    }
}

const mediaFinal = console.log(media1(n1,n2,n3))
const statusFinal = mediaParaStatus(z)
console.log(`O resultado final do aluno é ${statusFinal}`)

//======================================================

const nota1 = 8.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2) {
    if(n1 <= n2) {
        return n1
    } else {
        return n2
    }
}

function media(n1,n2,n3){
    const menorNota = minimo(n1, minimo(n2,n3));

    if(menorNota === n1) {
        return (n2 + n3) /2;
    } else if (menorNota === n2) {
        return(n1 + n3) /2;
    } else {
        return (n1 + n2) /2;
    }
}

console.log(media(nota1, nota2, nota3))

function mediaParastatus(media) {
    if(media >= 7) {
        return "Aprovado";
    } else if(media >= 4) {
        return "Recuperação"
    } else {
        return "Reprovado";
    }
}


const mediaFinal1 = media(nota1, nota2, nota3);
const statusFinal1 = mediaParaStatus(mediaFinal1)
console.log(`O resultado final do aluno é ${statusFinal1}`)