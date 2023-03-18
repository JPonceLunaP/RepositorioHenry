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
