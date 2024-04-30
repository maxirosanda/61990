const NUMEROSECRETO = Math.floor(Math.random() * 100) + 1
let intentos = 0
let adivinado = false

alert("¡Bienvenido al juego de adivinanzas! Adivina el número secreto entre 1 y 100.")

while(adivinado == false){

    let numeroIngresado = parseInt(prompt("Ingrese el numero a adivinar"))
    intentos++
    if(numeroIngresado == NUMEROSECRETO){
        alert("¡Felicidades! ¡Adivinaste el número secreto en " + intentos + " intentos")
        adivinado=true
    }else if(numeroIngresado < NUMEROSECRETO){
        alert("El número secreto es mayor. Intenta de nuevo.")
    }else if(numeroIngresado > NUMEROSECRETO){
        alert("El número secreto es menor. Intenta de nuevo.")
    }
}


