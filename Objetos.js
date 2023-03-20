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