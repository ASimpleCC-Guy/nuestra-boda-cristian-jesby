const btnOufit = document.querySelector('#btn-outfit')
btnOufit.addEventListener('click', () => {
  const outfitSection = document.querySelector('#outfit-section')
  outfitSection.scrollIntoView({ behavior: 'smooth' })
})

const navItemOufit = document.querySelector('#nav-item-outfit')
navItemOufit.addEventListener('click', () => {
  const outfitSection = document.querySelector('#outfit-section')
  outfitSection.scrollIntoView({ behavior: 'smooth' })
})

const navItemWay = document.querySelector('#nav-item-way')
navItemWay.addEventListener('click', () => {
  const waySection = document.querySelector('#way-section')
  waySection.scrollIntoView({ behavior: 'smooth' })
})

const navItemHistory = document.querySelector('#nav-item-history')
navItemHistory.addEventListener('click', () => {
  const historySection = document.querySelector('#history-section')
  historySection.scrollIntoView({ behavior: 'smooth' })
})

const btnOufitWomen = document.querySelector('#btn-outfit-women')
btnOufitWomen.addEventListener('click', () => {
  const outfitWomenSection = document.querySelector('#title-outfit-women')
  outfitWomenSection.scrollIntoView({ behavior: 'smooth' })
})

const btnOufitMen = document.querySelector('#btn-outfit-man')
btnOufitMen.addEventListener('click', () => {
  const outfitManSection = document.querySelector('#title-outfit-man')
  outfitManSection.scrollIntoView({ behavior: 'smooth' })
})

const invitados = [
  { guestName: 'Chiqui', slot: 1 },
  { guestName: 'Dario', slot: 1 },
  { guestName: 'Heorhi', slot: 1 },
  { guestName: 'Natalia', slot: 1 },
  { guestName: 'Zinedine', slot: 1 },
  { guestName: 'Giselle', slot: 1 },
  { guestName: 'Made Pabon', slot: 1 },
  { guestName: 'Yury Arevalo', slot: 1 },
  { guestName: 'Angie', slot: 1 },
  { guestName: 'Mayerli Pacheco', slot: 1 },
  { guestName: 'Ferney Niño', slot: 1 },
  { guestName: 'Abuelos', slot: 2 },
  { guestName: 'Duarte Forero', slot: 2 },
  { guestName: 'Julian', slot: 2 },
  { guestName: 'Pacheco Sanabria', slot: 2 },
  { guestName: 'Carrascal Contreras', slot: 2 },
  { guestName: 'Santi Angie', slot: 2 },
  { guestName: 'Arenas Diaz', slot: 2 },
  { guestName: 'Caro Andres', slot: 2 },
  { guestName: 'Papi Y Mami', slot: 2 },
  { guestName: 'Suegros', slot: 2 },
  { guestName: 'Alexa Y Santiago', slot: 2 },
  { guestName: 'Tia Chela', slot: 2 },
  { guestName: 'Guerro Lazaro', slot: 2 },
  { guestName: 'Tio Omar', slot: 2 },
  { guestName: 'Yulieth Niño', slot: 3 },
  { guestName: 'Pacheco Celedon', slot: 3 },
  { guestName: 'Toloza Orozco', slot: 3 },
  { guestName: 'William', slot: 3 },
  { guestName: 'Tio Henry', slot: 3 },
  { guestName: 'Erika', slot: 3 },
  { guestName: 'Chava', slot: 3 },
  { guestName: 'Anderson', slot: 4 },
  { guestName: 'Cesar', slot: 4 },
  { guestName: 'Vivi', slot: 4 },
  { guestName: 'Diaz Martinez', slot: 4 },
  { guestName: 'Ludwing', slot: 4 },
  { guestName: 'Gonzalo', slot: 4 },
  { guestName: 'Florez Tarazona', slot: 4 },
  { guestName: 'Bautista Niño', slot: 4 },
  { guestName: 'Diaz Torrado', slot: 5 },
  { guestName: 'Serpa Quintero', slot: 5 }
]

const normalizar = str =>
  str.toLowerCase().replace(/\s+/g, '')

const path = window.location.pathname // Devuelve "/jesby"
const segmentos = path.split('/').filter(Boolean) // ["jesby"]
const valor = segmentos[0] // "jesby"
const gestName = document.querySelector('#guest-name')
const persona = invitados.find(guest => normalizar(guest.guestName) === normalizar(valor))
const gestSlot = document.querySelector('#guest-slot')
gestName.textContent = persona.guestName.toUpperCase()
gestSlot.innerHTML = `<li id="guest-slot"><strong>💌 Cupos:</strong> ${persona.slot}</li>`

if (persona.slot > 1) {
  const invitationText = document.querySelector('#invitation-text')
  invitationText.innerHTML = 'Queremos que formen parte de nuestra historia,<br> acompañándonos a celebrar nuestra unión.'
}
