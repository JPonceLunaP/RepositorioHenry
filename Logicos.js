// Negación --NOT-- !
function negacion (permiso){
    if (permiso !== true){
        console.log("No tiene permiso");
    } else {
        console.log("Tiene permiso");
    }
}

negacion(true);
negacion(false);
//Conjunsción -- AND -- &&
function mayorYMenor (num){
    if(num > 5 && num < 10 && num % 2 === 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

mayorYMenor(2);
mayorYMenor(7);
mayorYMenor(8);
mayorYMenor(11);
// Disyunción -- OR -- ||
function operadorOR (str){
    if (str === "Henry" || str.length < 2){
        console.log(true);
    } else {
        console.log(false);
    }
}

operadorOR("H");
operadorOR("hen");
operadorOR("Henry");
operadorOR("C");



function condicionCompleja (num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    } else {
        console.log(false);
    }
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(11);