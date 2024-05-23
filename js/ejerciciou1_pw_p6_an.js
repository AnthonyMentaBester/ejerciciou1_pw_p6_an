let nombre1 = document.getElementById("op1");
let nombre2 = document.getElementById("op2");
let nombre3 = document.getElementById("op3");
let nombre4 = document.getElementById("op4");
let mensaje = document.getElementById("idmensaje");
let puntaje = document.getElementById();
let intentos = document.getElementById();
let op = ""; 
let imagen = document.getElementById("img")

function opcion(op) {
switch (op) {
    case op == "excadrill":
        document.getElementById("idmensaje").innerText = "Felicitaciones, has seleccionado la opción correcta";
        puntaje +1;
        puntaje = parseInt(document.getElementById())

        intentos +1;
        intentos = parseInt(document.getElementById())
    
        break;
    default:
        document.getElementById("idmensaje").innerText = "Pokémon incorrecto, intentalo nuevamente"; 
        break;
}

function resetear() {
    document.getElementById("img")
    
}


}