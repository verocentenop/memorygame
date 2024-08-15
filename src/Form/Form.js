// form.js
import { printRecords } from '../Records/Records'

export const printForm = () => {
  const appContainer = document.querySelector('#app')
  const formContainer = document.createElement('div')
  formContainer.className = 'form-container'

  const form = document.createElement('form')
  form.className = 'register-form'

  const label = document.createElement('label')
  label.textContent = 'Introduce tu nombre:'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'username'
  input.required = true

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.textContent = 'Jugar'

  form.append(label, input, submitButton)
  formContainer.append(form)
  appContainer.append(formContainer)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = input.value.trim()
    if (username) {
      localStorage.setItem('username', username)

      // Actualizar los records del nuevo usuario
      printRecords()

      // Opcionalmente, se podría ocultar el formulario después de registrar el usuario
      formContainer.remove()
    }
  })
}
