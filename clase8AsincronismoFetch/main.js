
/*
const funcionA = () => {
    console.log("hola soy la funcion A")
   
}

const funcionB = () => {
    funcionA()
    console.log("Hola soy la funcion B")
}

const funcionC = () => {
    funcionB()
    console.log("hola soy la funcion C")
}

const funcionD = () => {
    console.log("hola soy la funcion D")
}

funcionC()
funcionD()
*/
/*
const funcionSincronica = () => {
    console.log("hola soy una funcion sincronica")
}
const funcionSincronicaB = () => {
    console.log("hola soy una funcion sincronica")
}

funcionSincronica()
funcionSincronicaB()
funcionAsincronica()

const funcionAsincronica = async () => {
    console.log("hola soy una funcion Asincronica")
}*/

/*
console.log("inicia")
setTimeout(()=>{
    console.log("paso 0 segundos")
},0)
console.log("final")
*/


/*
const tic = setInterval(()=>{
    console.log("tic")
},1000)

const frenarTic = document.getElementById("frenarTic")
frenarTic.addEventListener("click",()=>{
    clearInterval(tic)
})

*/

const traerPosts = async () => {
   try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
   } catch (error) {
        console.log("error:" + error)
   }
}

traerPosts()