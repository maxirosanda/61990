const productosDeportivos = [
    {
        id: 1,
        nombre: "Balón de fútbol",
        precio: 15.99,
        stock: 100,
        descripcion: "Balón oficial de tamaño reglamentario",
        categoria: "Fútbol",
        color: "Blanco y negro"
    },
    {
        id: 780,
        nombre: "Raqueta de tenis",
        precio: 59.99,
        stock: 50,
        descripcion: "Raqueta de tenis profesional",
        categoria: "Tenis",
        color: "Rojo y blanco"
    },
    {
        id: 300,
        nombre: "Zapatillas de running",
        precio: 79.99,
        stock: 80,
        descripcion: "Zapatillas diseñadas para correr largas distancias",
        categoria: "Running",
        color: "Negro y gris"
    },
    {
        id: 958,
        nombre: "Pelota de baloncesto",
        precio: 19.99,
        stock: 70,
        descripcion: "Pelota de baloncesto oficial",
        categoria: "Baloncesto",
        color: "Naranja"
    },
    {
        id: 578,
        nombre: "Guantes de boxeo",
        precio: 29.99,
        stock: 30,
        descripcion: "Guantes de boxeo de cuero",
        categoria: "Boxeo",
        color: "Negro"
    },
    {
        id: 698,
        nombre: "Casco de ciclismo",
        precio: 49.99,
        stock: 60,
        descripcion: "Casco de ciclismo ventilado",
        categoria: "Ciclismo",
        color: "Azul y blanco"
    },
    {
        id: 777,
        nombre: "Pantalones de yoga",
        precio: 34.99,
        stock: 40,
        descripcion: "Pantalones de yoga elásticos",
        categoria: "Yoga",
        color: "Morado"
    },
    {
        id: 899,
        nombre: "Gorra de béisbol",
        precio: 9.99,
        stock: 90,
        descripcion: "Gorra de béisbol ajustable",
        categoria: "Béisbol",
        color: "Azul marino"
    },
    {
        id: 9,
        nombre: "Cuerda de saltar",
        precio: 7.99,
        stock: 120,
        descripcion: "Cuerda de saltar de alta velocidad",
        categoria: "Fitness",
        color: "Verde lima"
    },
    {
        id: 10,
        nombre: "Mancuernas ajustables",
        precio: 49.99,
        stock: 25,
        descripcion: "Juego de mancuernas ajustables",
        categoria: "Fitness",
        color: "Negro"
    },
    {
        id: 11,
        nombre: "Camiseta de fútbol",
        precio: 24.99,
        stock: 70,
        descripcion: "Camiseta oficial de equipo de fútbol",
        categoria: "Fútbol",
        color: "Amarillo"
    },
    {
        id: 12,
        nombre: "Bicicleta de montaña",
        precio: 299.99,
        stock: 15,
        descripcion: "Bicicleta de montaña de aluminio",
        categoria: "Ciclismo",
        color: "Negro y rojo"
    },
    {
        id: 13,
        nombre: "Saco de boxeo",
        precio: 89.99,
        stock: 20,
        descripcion: "Saco de boxeo de 100 libras",
        categoria: "Boxeo",
        color: "Negro"
    },
    {
        id: 14,
        nombre: "Gafas de natación",
        precio: 12.99,
        stock: 60,
        descripcion: "Gafas de natación antiempañantes",
        categoria: "Natación",
        color: "Transparente"
    },
    {
        id: 15,
        nombre: "Pelota de golf",
        precio: 9.99,
        stock: 40,
        descripcion: "Pelota de golf de alta calidad",
        categoria: "Golf",
        color: "Blanco"
    },
    {
        id: 16,
        nombre: "Cinta para correr",
        precio: 499.99,
        stock: 5,
        descripcion: "Cinta para correr eléctrica",
        categoria: "Fitness",
        color: "Negro"
    },
    {
        id: 17,
        nombre: "Sudadera con capucha",
        precio: 39.99,
        stock: 60,
        descripcion: "Sudadera con capucha y bolsillos",
        categoria: "Moda deportiva",
        color: "Gris"
    },
    {
        id: 18,
        nombre: "Calcetines deportivos",
        precio: 6.99,
        stock: 100,
        descripcion: "Calcetines deportivos transpirables",
        categoria: "Accesorios",
        color: "Negro"
    },
    {
        id: 19,
        nombre: "Banda de resistencia",
        precio: 8.99,
        stock: 80,
        descripcion: "Banda de resistencia para entrenamiento",
        categoria: "Fitness",
        color: "Rosa"
    },
    {
        id: 20,
        nombre: "Cinturón de levantamiento de pesas",
        precio: 19.99,
        stock: 45,
        descripcion: "Cinturón de levantamiento de pesas acolchado",
        categoria: "Fitness",
        color: "Negro"
    }
]

//Recorre el array 
productosDeportivos.forEach((productoDeportivo)=>{
    //console.log(productoDeportivo)
})


//Busca un elemento en el array (cuando no encuentre devuelve undefined)
const productoDeportivoEncontrado = productosDeportivos.find((productoDeportivo)=> productoDeportivo.id === 87)
//console.log(productoDeportivoEncontrado)

//Filtrar un elemento en el array (cuando no encuentra te devuelve un array vacio)
 
const productosDeportivosFiltrados = productosDeportivos.filter((productoDeportivo) => productoDeportivo.color.includes("Azul") )
//console.log(productosDeportivosFiltrados)

// Si existe un elemento (devuelve verdadero o falso)

const existeProductoDeportivo = productosDeportivos.some((productoDeportivo) => productoDeportivo.nombre === "Balón de fútbol"  )
//console.log(existeProductoDeportivo)

// Generar un nuevo array a partir del original

const nombresProductosDeportivos = productosDeportivos.map((productoDeportivo)=> productoDeportivo.nombre)
//console.log(nombresProductosDeportivos)

// Sacar un valor general

const total = productosDeportivos.reduce((acumulador,productoDeportivo) =>  acumulador + (productoDeportivo.precio * productoDeportivo.stock),0)
//console.log(total)

// Buscar la posicion en el array (cuando no encuentra devuelve -1)

const indexProductoDeportivo = productosDeportivos.findIndex((productoDeportivo)=> productoDeportivo.id === 8989)
//console.log(indexProductoDeportivo)



// Objeto Math

const PI = Math.PI
const EULER = Math.E
const maximo = Math.max(124,56,543,34,464,756,76)
const minimo = Math.min(124,65,86,45,234,9,34,3,23)
const redondeoParaArriba = Math.ceil(12.3)
const redondeoParaAbajo = Math.floor(12.6)
const redonderEnteroMasCercano = Math.round(14.2)
const raizde16 = Math.sqrt(16)
const numeroRandom = Math.random()
const numeroRandom1000 = Math.round(Math.random() * 10000) 
console.log(numeroRandom1000)

// La clase Date

const fechaActual = new Date()
console.log(fechaActual)
const fechaNacimiento = new Date(1987,6,18,6,32,55)
console.log(fechaNacimiento)
const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth()
const anioNacimiento = fechaNacimiento.getFullYear()
const horaNacimiento = fechaNacimiento.getHours()
console.log(horaNacimiento)

const maxi = Math.floor((fechaActual - fechaNacimiento)/1000/60/60/24/365.25) 
console.log(maxi)

