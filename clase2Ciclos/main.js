let nombres = ["Maxi Rosanda","Jose Fernadez","Mario","Agustina","Federico Marquez","Maria","mariano"]

for(let i = 0; i < nombres.length;i++){
    if(nombres[i] == "Mario"){
        console.log("Existe el nombre " + nombres[i]  + "en la lista")
        break
    }
}


let nombre = prompt("Ingrese un nombre a adivinar")
let contador = 0

while(nombre != "Lucas"){
    alert("NO adivinaste")
    nombre = prompt("vuelva a ingresar el nombre a adivinar")
    contador++
}

alert("Adiviste es Lucas usaste " + contador + " intentos")


