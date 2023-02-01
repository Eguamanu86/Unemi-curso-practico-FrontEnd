export class RenderTemplate {

  constructor(cuentas) {
    this.cuentas = cuentas
  }

  render() {
    return this.cuentas.map((item) => {
      return `<tr>
            <td><b>${item.cuentaProducto.numero}</b></td>
            <td>${item.titular.cedula}</td>
            <td>${item.titular.nombres} ${item.titular.apellidos}</td>
            <td>${item.titular.genero}</td>
            <td>${item.tipoCuenta.codigo}</td>
            <td>${item.cuentaProducto.saldo}</td>
            <td>${item.fechaApertura}</td>
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-consignar" data-cuenta="${item.cuentaProducto.numero}">Consignar</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
    }).join('')
  }
}
