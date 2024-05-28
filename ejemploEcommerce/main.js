const URL = "https://ecommerce-coder-js-flex-61990-default-rtdb.firebaseio.com/"

const crearProducto = async (producto) => {

   try {
        const response = await fetch(URL + "productos.json",{
            method:"POST",
            body: JSON.stringify(producto)
        })
   } catch (error) {
        console.log(error)
   }

}

const traerProductos = async () =>{
    try {
        const response = await fetch(URL + "productos.json")
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

const borrarProducto = async (id) => {
     try {
        await fetch(URL + `productos/${id}.json`,{method:"DELETE"})
     } catch (error) {
        console.log(error)
     }
}

const actualizarProducto = async (id,datosNuevos) => {
    try {
        await fetch(URL + `productos/${id}.json`,{
            method:"PUT",
            body: JSON.stringify(datosNuevos)
        })
    } catch (error) {
        console.log(error)
    }
}

const mostrarProducto = (producto) =>{
    const contenedorProductos = document.getElementById("contenedorProductos")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.innerHTML = `
                            <h3>${producto.nombre}</h3>
                            <p>${producto.precio}</p>
                            <p>${producto.stock}</p>
                            <button>Actualizar</button>
                            <button>Borrar</button>

                        `
    contenedorProductos.append(element)
}

const mostrarProductos = async () => {
   const data = await traerProductos()
   const productos = Object.keys(data).map(key =>({id:key,...data[key]}))
   productos.forEach(producto => {
    mostrarProducto(producto)
   })
}

mostrarProductos()
traerProductos()

const btnAgregarProducto = document.getElementById("btnAgregarProducto")

btnAgregarProducto.addEventListener("click",()=>{

    const nombre = document.getElementById("nuevoNombreProducto").value
    const precio = parseFloat(document.getElementById("nuevoPrecioProducto").value) 
    const stock = parseInt(document.getElementById("nuevoStockProducto").value) 
    const producto = {nombre,precio,stock}
    crearProducto(producto)
    mostrarProducto(producto)
})
