//Objeto literal

/*
const productoUno = {
    titulo:"Arroz",
    descripcion:"gfhasiogdj dlfkjsaiodfj kljdfioasfj oijdsfpoisa",
    precio: 130.4,
    stock:30,
    marca:"Gallo",
    peso:0.5,
    codigo:"FHS346JF",
    palabraClaves:["arroz","gallo","cereal"]
}


console.log(productoUno.palabraClaves[2])

productoUno.precio = 200
console.log(productoUno.precio)
*/

//Objetos con clases (paradigma Programacion orienta a objetos)

class Producto {

    constructor(titulo, descripcion, precio){
        this.titulo = titulo
        this.descripcion = descripcion
        this.precio = precio
    }

    calcularIva(){
       const precioIva =  this.precio * 1.21
       return precioIva
    }

    saberSiTieneDescuento(cantidad){
        if(this.precio > 400 && cantidad >= 4){
            return true
        }else{
            return false
        }
    }
}




const productoUno = new Producto("Fideos","kjgioasgj skajfiopsafj jdfspioa",130)
const productoDos = new Producto("Coca Cola","dksjfsiodaf jkfnoisdjf djfiposafj",500)
console.log(productoUno.calcularIva())
console.log(productoDos.calcularIva())
console.log(productoUno.saberSiTieneDescuento(6))
console.log(productoDos.saberSiTieneDescuento(3))
console.log(productoDos.saberSiTieneDescuento(5))

//---------------------------------------

// Paradigma de Progracion Funcional ------------------

const productoTres = {
    titulo:"Pepsi",
    descripcion:"djkfsadgf djskhgfiosua",
    precio:120
}

function calcularIva(precio){
    const precioConIva = precio * 1.21
    return precioConIva
}

calcularIva(productoTres.precio)

//---------------------------------------



/*
class Persona{
    constructor(nombre, edad, calle,localidad) {
        this.nombre = nombre
        this.edad   = edad
        this.calle  = calle
        this.localidad = localidad
    }


}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742","San Justo")
const persona2 = new Persona("Marge",37,"Av. Siempreviva 742","San Justo")
console.log(persona1)
*/