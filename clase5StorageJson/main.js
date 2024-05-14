const productosRecuperados = JSON.parse(localStorage.getItem("productos"))

let productos = []

if(productosRecuperados){
    productos = productosRecuperados
}

let continuar = confirm("quiere agregar un producto")

while(continuar){

    const tituloProducto = prompt("Ingrese titulo del producto")
    const descripcionProducto = prompt("Ingrese descripcion del producto")
    const precioProducto = parseFloat(prompt("Ingrese precio del producto"))
    const nuevoProducto = confirm("el producto es nuevo?")

    const producto = {
        titulo:tituloProducto,
        descripcion:descripcionProducto,
        precio:precioProducto,
        nuevo: nuevoProducto
    }

    productos.push(producto)
    const productosJson = JSON.stringify(productos)
    localStorage.setItem("productos",productosJson)

    continuar = confirm("quiere continuar agregando productos")

}
 console.log(productos) 

