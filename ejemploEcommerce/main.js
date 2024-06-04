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

const mostrarTarjetaProducto = (producto) =>{
    const contenedorProductos = document.getElementById("contenedorProductos")
    const element = document.createElement("form")
    element.className = "tarjeta"
    element.id = producto.id
    element.innerHTML = `
                            <input type="text" value="${producto.nombre}" class="input"/>
                            <input type="number" value="${producto.precio}" class="input"/>
                            <input type="number" value="${producto.stock}" class="input"/>
                            <button type="button" class="btn-borrar">Borrar</button>
                            <button type="button" class="btn-actualizar">Actualizar</button>

                        `
    contenedorProductos.append(element)
}

const mostrarTarjetasProductos = async () => {
   const data = await traerProductos()
   const productos = Object.keys(data).map(key =>({id:key,...data[key]})) // despues la explico (clase 10)
   productos.forEach(producto => {
    mostrarTarjetaProducto(producto)
   })
}

const borrarTarjetaProducto = (id) => {
    const element = document.getElementById(id)
    element.remove()
}

const mensaje = (title,icon) => {
    Swal.fire({
        title,
        icon,
        toast:true,
        position:"top-end",
        showConfirmButton: false,
        timer:1500

      })
}
const mensajeConfirmacion = async (title) => {

    const result = await Swal.fire({
         title: title,
         showCancelButton: true,
         confirmButtonText: "Si",
         cancelButtonText: `No`,
         confirmButtonColor: "#fff",
         denyButtonColor: "#fff",
         background: "#000",
         width: 600,
         padding: "30px",
         color: "#fff",
         backdrop: "rgba(0,0,123,0.4)"
         
       })
         
     if (result.isConfirmed) return true
 }

mostrarTarjetasProductos()

const btnAgregarProducto = document.getElementById("btnAgregarProducto")

btnAgregarProducto.addEventListener("click",async ()=>{

    const confirmar = await mensajeConfirmacion("quiere agregar un producto?")
    if(confirmar){
        const nombre = document.getElementById("nuevoNombreProducto").value
        const precio = parseFloat(document.getElementById("nuevoPrecioProducto").value) 
        const stock = parseInt(document.getElementById("nuevoStockProducto").value) 
        const producto = {nombre,precio,stock}
        crearProducto(producto)
        mostrarTarjetaProducto(producto)
        mensaje("el producto se cargo correctamente","success")
    }
   
})

const app = document.getElementById("app")
app.addEventListener("click",async (event)=>{
    if(event.target && event.target.classList.contains("btn-borrar")){

        const confirmar = await mensajeConfirmacion("esta seguro que quiere borrar el producto")
        if(confirmar){
            const id = event.target.parentElement.id
            borrarProducto(id)
            borrarTarjetaProducto(id)
            mensaje("el producto se borror correctamente","success")
        }
   

    }
    if(event.target && event.target.classList.contains("btn-actualizar")){

        const confirmar = await mensajeConfirmacion("esta seguro que quiere actualizar?")
        const parentElement = event.target.parentElement
        if(confirmar){
            
            const id = parentElement.id
            const inputs = parentElement.getElementsByClassName("input")
            const nombre = inputs[0].value
            const precio = inputs[1].value
            const stock = inputs[2].value
            actualizarProducto(id,{nombre,precio,stock})
            mensaje("el producto se actualizo correctamente","success")
        }else{
            parentElement.reset()
        }
    }
})

