import Titular from '../entity/titular.js'
import {
  TipoCuenta,
  CuentaAhorro,
  CuentaCorriente,
  InversionCDT
} from '../entity/cuenta-producto.js'
import CuentaBancaria from '../entity/cuenta-banco.js'

class CasoUsoSimuladorBancario {
  constructor(repositorioCuentasBanco) {
    this.repositorioCuentasBanco = repositorioCuentasBanco
  }

  crearCuenta(data) {

    const cuenta = this.repositorioCuentasBanco.getExisteTitularAndTipoCuenta(
      data.cedula,
      data.tipo
    )

    if (!cuenta) {
      const titular = new Titular(
        data.cedula,
        data.nombres,
        data.apellidos,
        data.genero
      )

      const tipoCuenta = new TipoCuenta(
        data.tipo,
        data.tipoNombre
      )

      const cuentaProducto = this.#getCuentaProducto(
        tipoCuenta.codigo,
        data.saldo,
        data.interes
      )

      const cuentaBancaria = new CuentaBancaria(
        titular,
        tipoCuenta,
        cuentaProducto
      )

      this.repositorioCuentasBanco.crearCuenta(cuentaBancaria)
    }
    else {
      alert('Existe Titular con Tipo de cuenta repetido')

    }


  }

  #getCuentaProducto(tipo, saldo, interesMensual) {
    const numeroCuenta = this.repositorioCuentasBanco.getNumCuenta()
    switch (tipo) {
      case "AHORRO":
        return new CuentaAhorro(
          numeroCuenta,
          saldo
        )
      case "CORRIENTE":
        return new CuentaCorriente(
          numeroCuenta,
          saldo,
          interesMensual
        )
      case "INVERSION":
        return new InversionCDT(
          numeroCuenta,
          saldo,
          interesMensual,
          2
        )
    }

  }

}

export {
  CasoUsoSimuladorBancario
}
