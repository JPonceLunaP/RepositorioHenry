function viajar(destino){
    if (destino === "Brasil"){
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina"){
        console.log("Gire a la DERECHA");
    } else {
        console.log("Nos perdimos")
    }
}

viajar("Brasil");

viajar("Argentina");

viajar("Peru");

function puedeManejar (edad){
    if (edad >= 18){
        console.log("Puede manejar");
    } else{
        console.log("No pued emanejar");
    }
}

puedeManejar(18);

puedeManejar(15);
