let continuar = true

while(continuar == true){
    let numeroUno = parseFloat(prompt("Ingrese un numero"))
    let numeroDos = parseFloat(prompt("ingrese otro numero"))
    let operacion = prompt("ingrese la operacion (sum,res,mul,div)")
    let resultado = 0

    if(operacion == "sum"){
        resultado = numeroUno + numeroDos
    }else if(operacion == "res"){
        resultado = numeroUno - numeroDos
    }else if(operacion == "mul"){
        resultado = numeroUno * numeroDos
    }else if(operacion == "div"){
        if(numeroDos == 0){
            resultado = "no se puede dividir por cero"
        }else{
            resultado = numeroUno / numeroDos
        }
       
    }else{
        resultado = "Error"
    }

    alert("Resultado: " + resultado)
    continuar = confirm("quiere segir haciendo operaciones?")
}