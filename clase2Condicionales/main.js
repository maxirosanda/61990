let usuarioNombre = "Maxi Rosanda"
let usuarioPassword = "123456maxi" 
let numeroUsuario = 789
let usuarioRegistrado = true
let moneda = "Pesos Argentinos"
let usuarioSaldo = 100
const PLATAFORMA = "Billetera virtual Argentina"

let ingresarDinero =  confirm("Quiere ingresar dinero?")

if(ingresarDinero == true){
    let dineroIngresado = parseFloat(prompt("Ingrese el monto deseado"))
    usuarioSaldo = usuarioSaldo + dineroIngresado
    alert("El saldo es : " + usuarioSaldo)
}else{
    alert("gracias por usar nuestra billetera")
}


if(usuarioNombre == "Maxi Rosanda"){

    let passwordIngresado = prompt("Ingrese su Password")

    if(usuarioPassword == passwordIngresado){
        alert("password valido")
    }else{
        alert("password invalido")
    }

}

if(usuarioSaldo >= 600){

    alert("Usted es usuario Oro")

}else if(usuarioSaldo >= 400){
    alert("Usted es usuario Platino")
}else if(usuarioSaldo >= 200){
    alert("Usted es Usuario Bronce")
}else{
    let faltanteOro = 600 - usuarioSaldo
    let faltantePlata = 400 - usuarioSaldo
    let faltanteBronce = 200 - usuarioSaldo
    alert("A usted le falta " + faltanteOro + " pesos para ser Oro \nA usted le falta " + faltantePlata + " pesos para ser Plata \nA usted le falta " + faltanteBronce + " pesos para ser bronce")
}




