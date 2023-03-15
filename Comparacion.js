//Operadores de comparación o relacionales
var num1 = 4;
var num2 = 5;
    //mayor que >
var mayor = num1>num2;
console.log(mayor);

    //menor que <
var menor = num1<num2;
console.log(menor);

    //mayor o igual que >=
var mayig = num1>=num2;
console.log(mayig);

    //menor o igual que <=
var menig = num1<=num2;
console.log(menig);

    //igualdad ==
var igual = num1==num2;
console.log(igual);

    //desigualdad !=
var desigual = num1!=num2;
console.log(desigual);

//Operadores de igualdad

    //== y ===

var numb = 3;
var str = "3";

console.log("===", numb === str);
console.log("==", numb == str);

//Asociatividad

    var a = 1;
    var b = 2;
    var c = (a = b);

    console.log(a);
    console.log(b);
    console.log(c);