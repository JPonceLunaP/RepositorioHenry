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