const usuario1 = {
    nombres : "Beto Junior",
    apellidos : "Quiroga M.",
    edad: 29,
    correo: "beto@ed.team",
    activo: true,
    presentarse(){
        console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`)
    }
}

console.log(usuario1)