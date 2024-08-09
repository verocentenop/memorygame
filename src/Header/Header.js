import './Header.css'

export const printHeader = () => {
  const appContainer = document.querySelector('#app')
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  const texto = document.createElement('p')
  h1.textContent = 'Juego de memoria'
  texto.textContent =
    'Encuentra todos los números que coincidan en parejas en el menor tiempo y movimientos posibles, ¿podrás hacerlo?'

  header.append(h1, texto)
  appContainer.append(header)
}
