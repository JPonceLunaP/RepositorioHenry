// Switch
var ex = "Adolfo";

switch(ex){
    case "Juan":
        console.log("Eres juan");
        break;
    case "Adolfo":
        console.log("Eres adolfo");
        break;
    default:
        console.log("Quien eres?");
        break;
}

//Do - While

var resultado = '';
var i = 0;

do {
    i = i+1;
    resultado = resultado+i;
} while (i < 5);

console.log(resultado);

// Continue

e = 0;
n = 0;
while (e < 5) {
   e++;
   console.log("e:", e);
   if (e == 3)
      continue;
   n += e;
   console.log("n:", n);
}

//Brake

function comprobarBraek (x){
    var u = 0;
    while (u < 6){
        if(u === 3) break;
        u++;
        console.log("u:", u);
    }

    console.log(u*x);
}

comprobarBraek(10);
    