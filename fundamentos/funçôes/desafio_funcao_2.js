function notaDoAluno(N) {
    if (N <= 10 && N >= 9.1) {
        return "A+"
    } else if (N <= 9 && N >= 8.1) {
        return "A"
    } else if (N <= 8 && N >= 7.1) {
        return "B+"
    } else if (N <= 7 && N >= 6.1) {
        return "B"
    } else if (N <= 6 && N >= 5.1) {
        return "C+"
    } else if (N <= 5 && N >= 4.1) {
        return "C"
    } else if (N <= 4 && N >= 3.1) {
        return "D+"
    } else if (N <= 3 && N >= 2.1) {
        return "D"
    } else if (N <= 2 && N >= 1.1) {
        return "E+"
    } else if (N <= 1 && N >= 0.1) {
        return "E"
    } else if (N === 0) {
        return "F"
    } else {
        return "Resultado invalido"
    }
}

console.log(`O conceito do aluno ${notaDoAluno(5.1)}`)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function notaParaConceito(nota) {
    switch(Math.ceil(nota)) {
        case 10: return '+A';
        case 9: return 'A';
        case 8: return 'B+';
        case 7: return 'B';
        case 6: return 'C+';
        case 5: return 'C';
        case 4: return 'D+';
        case 3: return 'D';
        case 2: return 'E+';
        case 1: return 'E';
        case 0: return 'F';
        default: return null;
    }
}

console.log(`O conceito do aluno ${notaParaConceito(5.1)}`)
