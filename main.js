import './style.css'
import { printCartas } from './src/Cartas/Cartas'
import { printHeader } from './src/Header/Header'
import { funcionality } from './src/Funcionality/Funcionality'
import { printFooter } from './src/Footer/Footer'
import { printForm } from './src/Form/Form'

const init = async () => {
  printHeader()
  printCartas()
  funcionality()
  printForm()
  printFooter()
}
init()
