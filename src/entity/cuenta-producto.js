class Cuenta {
  constructor(numero, saldo) {
    this.numero = numero
    this.saldo = Number(saldo)
  }
}

class TipoCuenta {
  constructor(codigo, nombre) {
    this.codigo = codigo
    this.nombre = nombre
  }
}

class CuentaAhorro extends Cuenta {
  constructor(numero, saldo) {
    super(numero, saldo)
    this.interesMensual = 0
  }
}

class CuentaCorriente extends Cuenta {
  constructor(numero, saldo, interesMensual) {
    super(numero, saldo)
    this.interesMensual = Number(interesMensual)
  }

}

class InversionCDT extends Cuenta {
  constructor(numero, saldo, interesMensual, mesApertura) {
    super(numero, saldo)
    this.interesMensual = Number(interesMensual)
    this.mesApertura = mesApertura
  }
}

export {
  TipoCuenta,
  CuentaAhorro,
  CuentaCorriente,
  InversionCDT
}
