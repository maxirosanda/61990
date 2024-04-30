const estudiantesCursoJS = []

function agregarDatosEstudiante(dni,nombre,apellido){
    const estudiante = {
        dni:dni,
        nombre:nombre,
        apellido:apellido
    }
    estudiantesCursoJS.push(estudiante)
}

function eliminarDatosEstudiante(){
    console.log("eliminar estudiante")
}

function modificarDatosEstudiante(){
    console.log("estudiante modificado")
}

function verDatosEstudiantes(){
    for (const estudiante of estudiantesCursoJS) {
        alert("DNI: " + estudiante.dni + " Nombre: " + estudiante.nombre + " Apellido: " + estudiante.apellido)
    }
}

function verDatosEstudiante(dni){
    for (const estudiante of estudiantesCursoJS) {
        if(estudiante.dni == dni){
            alert("DNI: " + estudiante.dni + " Nombre: " + estudiante.nombre + " Apellido: " + estudiante.apellido)
        }
    }
}

function main(){
    let continuar = confirm("Quiere realizar una accion")
    while(continuar){
        const accion = prompt("ingresar accion (crear,verTodos,ver)")
        if(accion == "crear"){
            const dniIngresa = prompt("Ingrese DNI del nuevo usuario")
            const nombreIngresa = prompt("Ingrese nombre del nuevo usuario")
            const apellidoIngresa = prompt("Ingrese apellido del nuevo usuario")
            agregarDatosEstudiante(dniIngresa,nombreIngresa,apellidoIngresa)
            verDatosEstudiante(dniIngresa)
        }else if(accion =="verTodos"){
            verDatosEstudiantes()
        }else if(accion == "ver"){
            const dniIngresa = prompt("Ingrese DNI del estudiante")
            verDatosEstudiante(dniIngresa)
        }else{
            alert("accion no valida")
        }
        continuar = confirm("Quiere realizar otra accion")
    }

}

main()

