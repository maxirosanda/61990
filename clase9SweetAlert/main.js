const productos = []

const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    Swal.fire({
        title: "The Internet?",
        //text: "That thing is still around?",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        width:400,
        timer:2000,
        position:"top-end",
        padding:"20px",
        color:"#fff",
        background:"#000",
        toast:true

  
      })
})

const btnDos = document.getElementById("btnDos")
btnDos.addEventListener("click", async () => {

   const result = await Swal.fire({
        title: "Quiere agregar el producto?",
        icon: "success",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        width:400,
        timer:2000,
        position:"center",
        padding:"20px",
        color:"#fff",
        background:"#000",

  
      })
    if(result.isConfirmed){
        const producto = {
            nombre:"coca cola",
            precio:1200
        }
        productos.push(producto)
        console.log(productos)
    }
})