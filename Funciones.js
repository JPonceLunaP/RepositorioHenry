// Funciones

function sumaNum(x){
    console.log("La suma es:", x+3);
}

sumaNum(5);

//Primera forma de declarar funciones

function restaNum(y){
    return y - 3;
}

//Segunda forma de declarar funciones

var divNum = function (z){
    return z/3
}

//Tercera forma de declarar variables
var mulNum = (a) =>{
    return a*3
}

mulNum(30);


//diferencia entre return y console.log

function prueba (x){
    console.log("multiplicado por 3 es:", x*3);
    return ("multiplicado por 3 es:", x*3);
}

prueba(20);