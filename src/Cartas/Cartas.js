import './Cartas.css'
import { arrayCartas } from './ArrayCartas'
import { funcionality } from '../Funcionality/Funcionality'

export const printCartas = () => {
  const appContainer = document.querySelector('#app')
  const main = document.createElement('main')
  const cardSection = document.createElement('section')
  cardSection.className = 'card-section'

  for (const carta of arrayCartas) {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'
    cardContainer.id = carta.id
    cardSection.append(cardContainer)
  }

  const marcadores = document.createElement('section')
  marcadores.className = 'marcadores'
  const aciertos = document.createElement('h3')
  aciertos.textContent = 'Aciertos: 0'
  aciertos.id = 'aciertos'
  const tiempo = document.createElement('h3')
  tiempo.textContent = 'Tiempo: 60 segundos'
  tiempo.id = 'tiempo'
  const movimientos = document.createElement('h3')
  movimientos.textContent = 'Movimientos: 0'
  movimientos.id = 'movimientos'

  const ganador = document.createElement('h4')
  ganador.textContent = '¡Lo conseguiste!'
  ganador.className = 'ganador'
  const botones = document.createElement('section')
  botones.className = 'botones'
  const inicio = document.createElement('button')
  inicio.textContent = 'Inicio'
  inicio.className = 'button'
  const otraVez = document.createElement('button')
  otraVez.textContent = 'Volver a jugar'
  otraVez.className = 'button button-again'

  marcadores.append(aciertos, tiempo, movimientos)
  botones.append(inicio, otraVez)
  main.append(cardSection, marcadores, ganador, botones)
  appContainer.append(main)
  funcionality()
}
