//Duas expressões resultar em TRUE (aritméticos + - /relacionais <> /logicos && ||)
let verdadeiro1 =10;
let verdadeiro2 =20;

let True = ((verdadeiro1 += verdadeiro2) > (verdadeiro1 - verdadeiro2)) && ((verdadeiro2 *= verdadeiro1) > (verdadeiro1 - verdadeiro2))
console.log(True)
 
let True2 = ((verdadeiro1 += verdadeiro2) >= (verdadeiro1 + verdadeiro2)) || ((verdadeiro2 *= verdadeiro1) <= (verdadeiro1 * verdadeiro2))
console.log(True)

//Duas expressões resultar em TRUE (aritméticos * / /relacionais <= >= /logicos || &&)
let falso1 =30;
let falso2 =40;

let False = ((falso1 - falso2) < (falso1 + falso2)) !== ((falso1 + falso2) < (falso1 * falso2) )
console.log(False)

let False2 = ((falso1 - falso2) < (falso1 + falso2)) && ((falso1 + falso2) > (falso1 * falso2) )
console.log(False2)
//--------------------------------------------------------------------------------------------------------------------

let v1 = 2 + 5 >= 7 && 8 > 2;
let v2 = !(6 * 6 < 3);

console.log("\n", v1);
console.log("\n",v2);

let f1 =  8 - 4 > 12 || false || 15 === "15";
let f2 = !(7 !== 7 || "3" !== 3)

console.log("\n",f1)
console.log("\n",f2)