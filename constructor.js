class Usuario {

    constructor(nombres,apellidos, correo, activo){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    presentarse(){
        return `Hola, soy ${this.nombres} y mi correo es ${this.correo}`
    } 

}

const beto =  new Usuario("Beto Junior", "Quiroga M.", "beto@gmail.com", true) // Instanciar un objeto
const alexys =  new Usuario("Alexys", "Lozada", "alexys@gmail.com", true)

console.log(`${beto.getNombres()} ${beto.getApellidos()}`)
