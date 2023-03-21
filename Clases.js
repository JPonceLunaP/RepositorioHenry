// Dos sintaxis
    //Funcion constructora

function Auto(puertas, año, color, marca, ruedas) {
    this.puertas = puertas;
    this.año = año;
    this.color = color;
    this.marca = marca;
    this.ruedas = ruedas;

    this.informacion = function (){
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miPrimerAuto = new Auto(2, 2018, "Rojo", "Ferrari", 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);
miPrimerAuto.informacion();

    //Expresion de clase

class Autos{
    constructor(puertas, año, color, marca, ruedas){
        this.puertas = puertas;
        this.año = año;
        this.color = color;
        this.marca = marca;
        this.ruedas = ruedas;
    }

    informacion(){
        console.log("ESte es un auto " + this.marca + " de Color " + this.color);
    }
}

var miSegundoauto = new Autos(4, 2015, "Blanco", "Fiat", 4);

console.log(miSegundoauto);
console.log(miSegundoauto.marca);
miSegundoauto.informacion()



class Footbol {
    constructor(jugador){
        this.jugador = jugador;
    }

    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new Footbol("messi");
var brasil = new Footbol("Pele");

argentina.obtenerNombre();
brasil.obtenerNombre();

//Prototivo

Array.prototype.mayoresQueTres = function (){
    var arregloModificado = [];
    for (i = 0; i < this.length; i++){
        if(this[i] > 3){
            arregloModificado.push(false);
        } else{
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
}

var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo);


class LatinoAmerica {
    constructor(){
       this.paises = []; 
    }
}

LatinoAmerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
}

var continente = new LatinoAmerica();
continente.agregarPais("Mexico");
console.log(continente.paises);