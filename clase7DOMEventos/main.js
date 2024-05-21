
/*
const titulo = document.getElementById("titulo")
titulo.innerText = "Chau mundo!!"
*/

/*
const app = document.getElementById("app")
app.innerHTML = `
                 <h2>Hola Mundo 2 !!!</h2>
                 <p>Cualquier cosa</>
                 `

*/
/*
const listaCompras = document.getElementsByClassName("productos")
console.log(listaCompras)
listaCompras[0].innerText = "Fernet"
*/


/*
const listaCompras = document.querySelectorAll(".productos")
console.log(listaCompras)

const titulo = document.querySelector("#titulo")
console.log(titulo.innerText)
*/

/*
const listado = document.getElementById("listado")
listado.className = "estilosLista"
*/


//Ejecicio de clase
/*
const frutas = ["Anana","Pera","Manzana","Banana"]

const cargarDOM = () => {
    const titulo = document.getElementById("titulo")
    titulo.innerText = "www.madaFruta.com"
    const tarjetas = document.getElementById("tarjetas")
    frutas.forEach((fruta)=>{
        const elementoDeLista = document.createElement("div")
        elementoDeLista.className = "tarjeta"
        elementoDeLista.innerHTML = `
                                    <h3>La fruta es ${fruta}</h3>
                                    <p>kldfjsd ljdkfsdfjm kdsjfpsafj skfjpo<p>
                                    <button>Comprar</button>
        `
        tarjetas.append(elementoDeLista)
    })
}

cargarDOM()
*/

/*
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}]

productos.forEach(producto => {
    const tarjetas = document.getElementById("tarjetas")
    const contenedor = document.createElement("div");
    contenedor.className = "tarjeta"
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`
    tarjetas.append(contenedor)
})
*/

const btnPrincipal = document.getElementById("btnPrincipal")

btnPrincipal.addEventListener("keydown",(e)=>{
    console.log(e.key)
})
const input = document.getElementById("input")
input.addEventListener("change",()=>{
    console.log(input.value)
})

/*
btnPrincipal.onclick = () =>{
    console.log("click")
}
*/

