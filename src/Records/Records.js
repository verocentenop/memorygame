import './Records.css'

export const guardarRecords = (timer, movimientos) => {
  const username = localStorage.getItem('username') || 'Invitado'
  const keyPrefix = `record_${username}_`
  const recordTiempo = localStorage.getItem(`${keyPrefix}tiempo`) || 60
  const recordMovimientos = localStorage.getItem(`${keyPrefix}movimientos`) || 0

  let updated = false

  if (timer < recordTiempo && timer >= 0) {
    localStorage.setItem(`${keyPrefix}tiempo`, timer)
    updated = true
  }
  if (movimientos < recordMovimientos || recordMovimientos === 0) {
    localStorage.setItem(`${keyPrefix}movimientos`, movimientos)
    updated = true
  }

  // Emitir un evento personalizado si los records fueron actualizados
  if (updated) {
    const event = new CustomEvent('recordsUpdated', {
      detail: {
        username,
        tiempo: localStorage.getItem(`${keyPrefix}tiempo`),
        movimientos: localStorage.getItem(`${keyPrefix}movimientos`)
      }
    })
    window.dispatchEvent(event)
  }
}

export const printRecords = () => {
  const username = localStorage.getItem('username') || 'Invitado'
  const keyPrefix = `record_${username}_`

  // Obtener los records de tiempo y movimientos del localStorage
  const recordTiempo = localStorage.getItem(`${keyPrefix}tiempo`) || 'N/A'
  const recordMovimientos =
    localStorage.getItem(`${keyPrefix}movimientos`) || 'N/A'

  // Crear elementos para mostrar el nombre de usuario y los records
  const recordsContainer = document.querySelector('#records')
  recordsContainer.innerHTML = `
    <h4 id="usernameDisplay">Usuario: ${username}</h4>
    <p>Record de Tiempo: ${recordTiempo} segundos</p>
    <p>Record de Movimientos: ${recordMovimientos}</p>
  `

  // Escuchar el evento personalizado para actualizar los records en tiempo real
  window.addEventListener('recordsUpdated', (e) => {
    const { username, tiempo, movimientos } = e.detail

    // Actualizar los valores en pantalla
    document.querySelector(
      '#usernameDisplay'
    ).textContent = `Usuario: ${username}`
    recordsContainer.innerHTML = `
      <h4 id="usernameDisplay">Usuario: ${username}</h4>
      <p>Record de Tiempo: ${tiempo} segundos</p>
      <p>Record de Movimientos: ${movimientos}</p>
    `
  })
}
