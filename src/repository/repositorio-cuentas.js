class RepositorioCuentasBanco {
  constructor() {
    this.cuentas = []
    this.transacciones = []
  }

  crearCuenta(cuenta) {
    this.cuentas.push(cuenta)
    console.log(this.cuentas)
  }

  getNumCuenta() {
    let numeroCuenta = this.cuentas.length + 1
    return numeroCuenta.toString().padStart(10, '0')
  }

  getExisteTitularAndTipoCuenta(cedula, tipoCuenta) {
    return this.cuentas.filter(
      (cuenta) => cuenta.titular.cedula === cedula && cuenta.tipoCuenta.codigo === tipoCuenta
    ).shift()
  }


}
export default RepositorioCuentasBanco
