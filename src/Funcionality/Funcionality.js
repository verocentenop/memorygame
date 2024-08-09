import './Funcionality.css'
import { arrayCartas } from '../Cartas/ArrayCartas'

export const funcionality = () => {
  let cartasAbiertas = 0
  let carta1 = null
  let carta2 = null
  let index1 = null
  let index2 = null
  let movimientos = 0
  let aciertos = 0
  let temporizador = false
  let timer = 60
  let tiempoRestante = null

  const mostrarMovimientos = document.querySelector('#movimientos')
  const mostrarAciertos = document.querySelector('#aciertos')
  const mostrarTiempo = document.querySelector('#tiempo')
  const ganadorMensaje = document.querySelector('.ganador')
  const otraVezBtn = document.querySelector('.button-again')

  let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  numeros = numeros.sort(() => Math.random() - 0.5)

  const contarTiempo = () => {
    tiempoRestante = setInterval(() => {
      timer--
      mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
      if (timer === 0) {
        clearInterval(tiempoRestante)
        bloquearCartas()
      }
    }, 800)
  }

  const bloquearCartas = () => {
    document.querySelectorAll('.card-container').forEach((carta, index) => {
      carta.innerHTML = numeros[index]
      carta.style.pointerEvents = 'none'
    })
  }

  const destapar = (carta, index) => {
    if (!temporizador) {
      contarTiempo()
      temporizador = true
    }

    if (cartasAbiertas === 0) {
      cartasAbiertas++
      carta1 = carta
      index1 = index
      carta1.innerHTML = numeros[index1]
      carta1.style.pointerEvents = 'none'
    } else if (cartasAbiertas === 1) {
      cartasAbiertas++
      carta2 = carta
      index2 = index
      carta2.innerHTML = numeros[index2]
      carta2.style.pointerEvents = 'none'
      deshabilitarCartas(true)
      movimientos++
      mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

      if (numeros[index1] === numeros[index2]) {
        aciertos++
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
        if (aciertos === 8) {
          clearInterval(tiempoRestante)
          mostrarTiempo.innerHTML = `Lo lograste en: ${60 - timer} segundos`
          mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
          mostrarGanador()
        }
        cartasAbiertas = 0
        deshabilitarCartas(false)
      } else {
        setTimeout(() => {
          carta1.innerHTML = ''
          carta2.innerHTML = ''
          carta1.style.pointerEvents = 'auto'
          carta2.style.pointerEvents = 'auto'
          cartasAbiertas = 0
          deshabilitarCartas(false)
        }, 800)
      }
    }
  }
  const deshabilitarCartas = (deshabilitar) => {
    const allCartas = document.querySelectorAll('.card-container')
    allCartas.forEach((carta) => {
      carta.style.pointerEvents = deshabilitar ? 'none' : 'auto'
    })
  }
  const mostrarGanador = () => {
    ganadorMensaje.style.display = 'block'
    otraVezBtn.style.display = 'inline-block'
    otraVezBtn.addEventListener('click', () => location.reload())
  }

  const allCartas = document.querySelectorAll('.card-container')
  allCartas.forEach((carta, index) => {
    carta.addEventListener('click', () => {
      if (carta.innerHTML === '') {
        destapar(carta, index)
      }
    })
  })
}
