class TipoProducto {
  constructor(codigo, nombre, impuesto) {
    this.codigo = codigo
    this.nombre = nombre
    this.impuesto = impuesto
  }

}

class Proveedor {
  constructor(codigo, nombre) {
    this.codigo = codigo
    this.nombre = nombre
  }

}

class Producto {
  constructor(codigo, tipo, stockDisponible, stockMinimo, precio, proveedor) {
    this.codigo = codigo
    this.tipo = tipo
    this.stockDisponible = stockDisponible
    this.stockMinimo = stockMinimo
    this.precio = precio
    this.proveedor = proveedor
  }
}

export {
  TipoProducto,
  Proveedor,
  Producto
}
