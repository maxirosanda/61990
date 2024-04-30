const productos = []
const PI = 3.14
const nombres = ["maxi","jose","federico","martin","sofia","hector","marcos","belen"]
const numeros = [125,548,54.2]
const bool = [true,false,false]

//console.log(nombres[2])
//console.log(nombres.length)

/*for(let i = 0;i<nombres.length;i++){
    console.log(nombres[i])
}
*/

nombres.push("Maria") // Agregar un item al final del array
nombres.unshift("leandro") //Agrega un item al principio del array
nombres.pop() // Elimina el ultimo item
nombres.shift() // Elimina el primer item
const nombresListadosPorComa = nombres.join(" ") // genera un string con los valores del array separados por el valor que le paso al metodos
const nombreUbicacion =  nombres.indexOf("hector") //encuentra el valor de la ubicacion del valor pasado al metodo
const nombreEncontrado =  nombres.includes("hector") // devuelve true o false depediendo si encuentra el valor pasado al metodo
nombres.splice(1,1) // eliminar un item en una posicion en particular
nombres.splice(4,1)
nombres.sort() // ordena alfabeticamente los valores
nombres.reverse() // invierte los valores en el array

//console.log(nombreUbicacion)
//console.log(nombresListadosPorComa)
console.log(nombres)


//Objetos

const autoUno ={
    marca:"alfa romeo",
    modelo:"147",
    anio:1999
}

//console.log(autoUno.marca)
autoUno.marca = "Alfa Romeo"
autoUno.color = "verde"
//console.log(autoUno)

// Array de objetos

const personas = [
    {
        nombre:"Maximiliano",
        apellido:"Rosanda",
        edad:36,
        peso:90,
        direccion:"Posadas 354",
        localidad:"Ramos Mejia",
        nacionalidad:"Argentina"
    },
    {
        nombre:"Fernanda",
        apellido:"Perez",
        edad:20,
        peso:60,
        direccion:"Posadas 354",
        localidad:"Ramos Mejia",
        nacionalidad:"Argentina"
    },
    {
        nombre:"Maria",
        apellido:"Pereyra",
        edad:25,
        peso:55,
        direccion:"Posadas 354",
        localidad:"Ramos Mejia",
        nacionalidad:"Argentina"
    }
]

for (const persona of personas) {
    alert("Nombre:" + persona.nombre + " Edad: " + persona.edad)
}

const sumar = (numeroUno,numeroDos) => {
    const resultado = numeroUno + numeroDos
    return resultado
}



console.log(sumar(8,5))