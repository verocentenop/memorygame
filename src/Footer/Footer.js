import './Footer.css'
export const printFooter = () => {
  const appContainer = document.querySelector('#app')
  const footer = document.createElement('footer')
  const footerSection = document.createElement('section')
  footerSection.className = 'footer'
  const footerText = document.createElement('p')
  footerText.textContent = 'Juegos desarrollados por © Verónica Centeno'

  footerSection.append(footerText)
  footer.append(footerSection)
  appContainer.append(footer)
}
