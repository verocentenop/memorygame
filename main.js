import './style.css'
import { printCartas } from './src/Cartas/Cartas'
import { printHeader } from './src/Header/Header'
import { funcionality } from './src/Funcionality/Funcionality'
import { printFooter } from './src/Footer/Footer'

const init = async () => {
  printHeader()
  printCartas()
  funcionality()
  printFooter()
}
init()
