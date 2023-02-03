export class RenderTemplate {

  constructor(cuentas) {
    this.cuentas = cuentas
  }

  render() {
    return this.cuentas.map((cuenta) => {
      return `<tr>
            <td><b>${cuenta.cuentaProducto.numero}</b></td>
            <td>${cuenta.titular.cedula}</td>
            <td>${cuenta.titular.nombres} ${cuenta.titular.apellidos}</td>
            <td>${cuenta.titular.genero}</td>
            <td>${cuenta.tipoCuenta.codigo}</td>
            <td>$ ${cuenta.cuentaProducto.saldo}</td>
            <td>${cuenta.fechaApertura}</td>
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-depositar" data-cuenta="${cuenta.cuentaProducto.numero}">Depositar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-cuenta="${cuenta.cuentaProducto.numero}">Debitar</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
    }).join('')
  }
}
