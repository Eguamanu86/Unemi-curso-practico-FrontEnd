// importacion de mmodelos de clases.
import RepositorioCuentasBanco from '../../src/repository/repositorio-cuentas.js'
import { CasoUsoSimuladorBancario } from '../../src/use-cases/usecases-simulador-bancario.js'
import { RenderTemplate } from './table-render.js'

// crear las instancias de las clases
const repositorioCuentasBanco = new RepositorioCuentasBanco()
const casoUsoSimuladorBancario = new CasoUsoSimuladorBancario(repositorioCuentasBanco)
const renderTemplate = new RenderTemplate(repositorioCuentasBanco.cuentas)

// se agrega la referencia a los constroles del formulario HTML
const tbody = document.querySelector("#id-table-cuentas-banco > tbody");
const formRegistroCuenta = document.querySelector('#id-form-registro-titular-cuenta')
const selectTipo = document.getElementById('id-select-tipo-cuenta');

// capturamos en evento submit del formulario HTML addEventListener
formRegistroCuenta.addEventListener('submit', (event) => {
  event.preventDefault();
  // creamos un objeto FormData con los valores de los controles del Formulario HTML
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())

  data.tipoNombre = selectTipo.options[selectTipo.selectedIndex].text

  // modelo de negocio agregar cuentas bancarias
  casoUsoSimuladorBancario.crearCuenta(data)
  // renderizar datos en la tabla HTML
  tbody.innerHTML = renderTemplate.render()

});
