
// Las clases son moldes 

class Usuario {

    constructor(nombres,apellidos, correo, activo){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    // Siempre hay que escribir los métodos con un return !
    presentarse(){
        return `Hola, soy ${this.nombres} y mi correo es ${this.correo}`
    } 

    // Métodos getters y setters
    // Get - obtener 
    // Set - dar

    getNombres(){
        return this.nombres
    } 

    getApellidos(){
        return this.apellidos
    }

    setApellidos(nuevosApellidos){
        this.apellidos = nuevosApellidos
    }

} 

// Herencia  - Profesor hereda de la clase Usuario

class Profesor extends Usuario{
    constructor(nombres,apellidos, correo, activo, cursosDictados){
        super(nombres,apellidos, correo, activo)
        this.cursosDictados = cursosDictados
    }
}

class Alumno extends Usuario{
    constructor(nombres,apellidos, correo, activo, cursosTomados){
        super(nombres,apellidos, correo, activo)
        this.cursosTomados = cursosTomados
    }
}

const beto =  new Alumno("Beto", "Quiroga", "beto@gmail.com", true, ['HTML', 'CSS']) // Instanciar un objeto
const alexys =  new Profesor("Alexys", "Lozada", "alexys@gmail.com", true, ['BD', "JAVA"])

beto.setApellidos("Quiroga Muñoz")

console.log(beto)
console.log(alexys)
