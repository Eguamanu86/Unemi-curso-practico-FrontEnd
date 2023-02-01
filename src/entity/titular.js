class Persona {
  constructor(cedula, nombres, apellidos, genero) {
    this.cedula = cedula
    this.nombres = nombres
    this.apellidos = apellidos
    this.genero = genero
  }

}

class Titular extends Persona {
  constructor(cedula, nombres, apellidos, genero) {
    super(cedula, nombres, apellidos, genero)
  }

}

export default Titular
