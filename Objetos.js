// objetos

var deportes = {
    conBalon:["Footbol", "Basket", "Rugby"],
    sinBalon:["Boxeo", "Surf", "Trekkin"],
};

var persona =  {
    nombre: "Lucas",
    edad: 26,
    estudios: {esProgramador: true},
};

//Trabajar con objetos
    //Dot-Notation -- Notacion por punto

console.log(persona.edad);
persona.nombre = "Martin";
console.log(persona.nombre);
persona.edad = 32;
console.log(persona.edad);


var autos = {};

autos.marcas = ["Ford", "Audi", "Ferrari"];

console.log(autos);

//Borrar propiedades

delete autos.marcas;
console.log(autos);

var misFunciones = {
    saludar: function(){  
        console.log("Hola");
    },
};

misFunciones.saludar();

var atuendos = {manos: ["guantes", "anillos"], pies: ["zapatos", "soquetes"]};

console.log(atuendos.manos);

    // Otra notacion Bracket Notation

atuendos["piernas"] = ["Bermudas", "Pantalones"];
console.log(atuendos.piernas);

var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas[propUno] = ["Frutas", "Vegetales"],
    comidas[propDos] = ["Hamburguesas", "Papas fritas"]
};

diferenciaDeNotaciones ("saludable", "noSaludable");
console.log(comidas);

//Objetos avanzados
    //hasOwnProperty -- Para saber si tiene una propiedad espesifica

var libro = {autor: "Borges", genero: "Policial", año: 1990};

var tienePropiedad = libro.hasOwnProperty("autor");
console.log(tienePropiedad);

    //keys -- devuelve un arreglo con los nombres de las propiedades
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

    //for in -- bucle para recorrer las propiedades

var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (var prop in mundo){
    console.log("Esta es la propiedad:" + prop);
    console.log("Este es el valor: " + mundo[prop]);
};

    // this -- hacemos referencia a un contexto
var mascota = {
    animal: "Perro",
    raza: "Ovejero Aleman",
    amistoso: true,
    dueña: "Maria Lopez",
    info: function() {
        console.log("mi perro es un " + this.raza);
    },
};

mascota.info();

