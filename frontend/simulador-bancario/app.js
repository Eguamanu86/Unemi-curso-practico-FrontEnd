import RepositorioCuentasBanco from '../../src/repository/repositorio-cuentas.js'
import { CasoUsoSimuladorBancario } from '../../src/use-cases/usecases-simulador-bancario.js'

const repositorioCuentasBanco = new RepositorioCuentasBanco()
const casoUsoSimuladorBancario = new CasoUsoSimuladorBancario(repositorioCuentasBanco)


const tbody = document.querySelector("#id-table-cuentas-banco > tbody");
const formRegistroCuenta = document.querySelector('#id-form-registro-titular-cuenta')
const selectTipo = document.getElementById('id-select-tipo-cuenta');


formRegistroCuenta.addEventListener('submit', (event) => {
  event.preventDefault();
  const formdata = new FormData(event.target)
  const data = Object.fromEntries(formdata.entries())
  data.tipoNombre = selectTipo.options[selectTipo.selectedIndex].text
  casoUsoSimuladorBancario.crearCuenta(data)
});
