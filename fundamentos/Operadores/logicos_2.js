const t1 = true;    
const t2 = true;

let comprarTV50 = t1 && t2; // AND
console.log("Vamos comprar a tv de 50'? ", comprarTV50);

let comprarTV32 = t1 !== t2// XOR
console.log("Vamos comprar a tv de 32'? " + (t1 !== t2));

let tomarSorvete= t1 || t2; // OR
console.log ("Vamos tomar sorvete?", tomarSorvete);

let ficarEmCasa= !tomarSorvete // not
console.log ("Vamos ficar em casa", ficarEmCasa)