var devuelvoUsuario = function(){
    return "Camilo";
};

var devuelvoSaludo = function (){
    return "Hola";
};

var saludar = function(cb1, cb2){
    return cb1() + " " + cb2();
};

var resultado  = saludar(devuelvoSaludo, devuelvoUsuario);

console.log(resultado);

var devuelvoFrase = function(comida){
    return "hoy quiero comer: " + comida;
}
var hablar = function(comida, cb){
    return cb(comida);
}
var fraseFinal = hablar("Pizza", devuelvoFrase);
console.log(fraseFinal);
