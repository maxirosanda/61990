
let tareas = JSON.parse(localStorage.getItem("tareas"))  || []

const agregarTarea = (nombre,contenido) => {
    const tarea = {
        id:crypto.randomUUID(),
        fecha: new Date(),
        nombre,
        contenido
    }
    tareas.push(tarea)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    return tarea
}

const borrarTarea = (id) => {
   tareas = tareas.filter(tarea => tarea.id != id)
   localStorage.setItem("tareas",JSON.stringify(tareas))
}

const actualizarTarea = (id,nombre,contenido) => {
    tareas = tareas.map(tarea =>{
        if(tarea.id === id){
            return {
                id,
                nombre,
                fecha: new Date(),
                contenido
            }
        }
        return tarea
    })
    localStorage.setItem("tareas",JSON.stringify(tareas))
   
}

const crearTarjetaTarea = (tarea) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.id = tarea.id
    element.innerHTML = `
                            <input type="text"  class="input" value="${tarea.nombre}">
                            <textarea type="text"  class="input">${tarea.contenido}</textarea>
                            <button class="btn btn-actualizar">Actualizar</button>
                            <button class="btn btn-borrar">Borrar</button>
    `
    app.append(element)
}

const borrarTarjetaTarea = (id) => {
    const element = document.getElementById(id)
    element.remove()
}

const principal = () =>{

    tareas.forEach(tarea => {
        crearTarjetaTarea(tarea)
    })
    const btnAgregarTarea = document.getElementById("btnAgregarTarea")
    btnAgregarTarea.addEventListener("click",()=>{
        const nombreNuevaTarea = document.getElementById("nombreNuevaTarea")
        const contenidoNuevaTarea = document.getElementById("contenidoNuevaTarea")
        const tarea = agregarTarea(nombreNuevaTarea.value ,contenidoNuevaTarea.value)
        crearTarjetaTarea(tarea)
        nombreNuevaTarea.value = ""
        contenidoNuevaTarea.value = ""

    })

    const app = document.getElementById("app")
    app.addEventListener("click",(event)=>{
        if(event.target && event.target.classList.contains("btn-borrar")){
            const parentElement = event.target.parentElement
            const id = parentElement.id
            borrarTarea(id)
            borrarTarjetaTarea(id)
        }
        if(event.target && event.target.classList.contains("btn-actualizar")){
            const parentElement = event.target.parentElement
            const id = parentElement.id
            const inputs = parentElement.getElementsByClassName("input")
            const nombre = inputs[0].value
            const contenido = inputs[1].value
            actualizarTarea(id,nombre,contenido)
        }
    })


}

principal()
