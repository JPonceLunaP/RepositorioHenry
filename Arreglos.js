var listaDeNombres = [];

listaDeNombres[3] = "Juan";

listaDeNombres[1] = "Jose";

console.log(listaDeNombres);

var elementoDelAray = listaDeNombres[1];

console.log(elementoDelAray);


//Metodo lenght

console.log(listaDeNombres.length);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
console.log(nombres.length);

//Agregar elementos -- Push y Unshift

var colores = ["rojo", "azul"];

console.log(colores);

colores.push("amarillo");

console.log(colores);

colores.unshift("verde");

console.log(colores);


//eliminar ultimo elemento -- Pop

colores.pop();

console.log(colores);

//eliminar el primer elemento -- Shift

colores.shift();

console.log(colores);

//para saber si incluye un elemento -- Includes

var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyePintor = pintores.includes("Dali");
console.log(incluyePintor);

var incluyePintor = pintores.includes("Monet");
console.log(incluyePintor);

// para saber si todos los elementos cumplen con una condicion -- Every
var numeros = [6,7,8,9];
var  mayorQueCinco = numeros.every((num) => {
    return num > 5;
});
console.log(mayorQueCinco);


// Split y Join
var palabra = "Henri";
var palabraSeparada = palabra.split("");
console.log(palabraSeparada);

palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);

// ForEach -- recorrer un arreglo, realizando una accion en cada elemento
var Numers = [1,2,3,4];
Numers.forEach((num) => console.log(num));

Numers.forEach((num) =>{
    if (num===3){
        console.log(num);
    }
});


//Map -- recorrer un arreglo, realizando una accion en cada elemento, 
//       devolviendo un nuevo arreglo con los elementos modificados
var masUno = Numers.map((num) => {
    return num+1;
});
console.log(masUno);


// Bucles con arreglos
// For

var arr = [1,2,3,4,5];

for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

function encontrarLetraP (string){
    var letras = string.split("");

    for (i = 0; i < letras.length; i++){
        if(letras[i] == "p" || letras[i] == "P"){
            console.log("si tiene la Letra P");
        }
    }
}

encontrarLetraP("Pepito");

// While

var boom = [];
while(boom.length < 5){
    boom.push("BOOM");
}

console.log(boom);


//Bucle infinito;

// var inf = [];
// var n = 1;

// while(n < 3){
//     inf.push(Math.random());
// }