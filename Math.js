// Math.pow -- Potencia

function potencia (x, y){
    var res = Math.pow(x, y);
    console.log(res);
    return res;
}

var pot = potencia (4, 5);

if(pot >= 20){
    console.log("Que gran exponencial");
} else{
    console.log("Que pequeña exponencia");
}

//Math.round -- Redondear al mas proximo
//Math.floor -- Redondear al valor entero menor
//Math.ceil -- Redondear al valor entero mayor

function redondearDes (a){
    var res2 = Math.round(a);
    console.log("Su valor: ", a, "ahora es: ", res2);
    return res2;
}

redondearDes (0.52);

function redondearMenor (b){
    var res3 = Math.floor(b);
    console.log("Su valor: ", b, "ahora es: ", res3);
    return res3;
}

redondearMenor (0.73);

function redondearMayor (c){
    var res4 = Math.ceil(c);
    console.log("Su valor: ", c, "ahora es: ", res4);
    return res4;
}

redondearMayor(0.34);

//Math.max & Math.min -- Conocer el valor maximo y minimo de un conjunto de numeros

function determinarMayor (a, b, c, d, e, f){
    var mayor = Math.max(a,b,c,d,e,f);
    console.log("El mayor es: ", mayor);
    return mayor;
}

determinarMayor (1, 4, 6, 2, 7, 2);

function determinarMenor (a, b, c, d, e, f){
    var menor = Math.min(a,b,c,d,e,f);
    console.log("El menor es: ", menor);
    return menor;
}

determinarMenor (1,2,3,4,5,6);

//Math.random generar numeros aleatoreos entre 0 y 1
function randomizar (){
    var num = Math.random();
    var res = num*10;
    var red = Math.floor(res);
    console.log("tu numero aleatoreo es: ", red);
    return red;
}

randomizar();

