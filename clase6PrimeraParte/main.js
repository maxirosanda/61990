const numeros = [3,9,5,2,8,7]


const tieneNumeroPar = numeros.filter(numero => numero % 2 === 0)
//console.log(numeros)
//console.log(tieneNumeroPar)

const productos = [
    {
        nombre:"Pepsi 500cc",
        precio:1000,
        stock:5
    },
    {
        nombre:"Coca cola 600cc",
        precio:1200,
        stock:4
    },
    {
        nombre:"Manaos 500cc",
        precio:700,
        stock:9
    }

]

const productosTotalValor = productos.map((producto) => {
    return {
        nombre:producto.nombre,
        valorTotal : producto.precio * producto.stock
    }
} )

//console.log(productosTotalValor)
//console.log(productos)


// Funciones de orden superior

const funcionDeOrdenSuperior = (mensaje,funcionInterna) => {

    funcionInterna(mensaje)

}

funcionDeOrdenSuperior("Hola mundo",alert)

const funcionFiltrar = (elementos, funcionDeComparacion) => {

    const nuevoArrayFiltrado = []

    for(const elemento of elementos){
       if(funcionDeComparacion(elemento)){
        nuevoArrayFiltrado.push(elemento)
       }

    }
    return nuevoArrayFiltrado
}

const numeroFiltrados = funcionFiltrar(numeros,numero => numero > 5)
console.log(numeroFiltrados)
