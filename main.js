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

const navItemHotel = document.querySelector('#nav-item-hotel')
navItemHotel.addEventListener('click', () => {
  const hotelSection = document.querySelector('#hotel-section')
  hotelSection.scrollIntoView({ behavior: 'smooth' })
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

const btnCottage = document.querySelector('#btn-cottage')
btnCottage.addEventListener('click', () => {
  const cottageSection = document.querySelector('#title-cottage')
  cottageSection.scrollIntoView({ behavior: 'smooth' })
})

const btnHotel = document.querySelector('#btn-hotel')
btnHotel.addEventListener('click', () => {
  const hotelSection = document.querySelector('#title-hotel')
  hotelSection.scrollIntoView({ behavior: 'smooth' })
})

const btnAirbnb = document.querySelector('#btn-airbnb')
btnAirbnb.addEventListener('click', () => {
  const airbnbSection = document.querySelector('#title-airbnb')
  airbnbSection.scrollIntoView({ behavior: 'smooth' })
})

const invitados = [
  { guestName: 'Tio Chiqui', slot: 1, owner: 'cristian' },
  { guestName: 'Dario Gravel', slot: 1, owner: 'cristian' },
  { guestName: 'Natalia y Heorhi', slot: 2, owner: 'cristian' },
  { guestName: 'Flia Cerpa Mossu', slot: 2, owner: 'cristian' },
  { guestName: 'Flia Camargo Ramirez', slot: 2, owner: 'cristian' }, // 1
  { guestName: 'Flia Valencia Orlas', slot: 2, owner: 'cristian' },
  { guestName: 'Tomas y Yinela', slot: 2, owner: 'cristian' },
  { guestName: 'Carolina y Andrés', slot: 2, owner: 'cristian' }, // 0
  { guestName: 'Flia Arenas Diaz', slot: 2, owner: 'cristian' }, // 0
  { guestName: 'Flia Cerpa Diaz', slot: 2, owner: 'cristian' },
  { guestName: 'Luis Morales', slot: 1, owner: 'cristian' },
  { guestName: 'Toloza Orozco', slot: 2, owner: 'cristian' }, // 0
  { guestName: 'Karen Pacheco', slot: 1, owner: 'cristian' }, // 0
  { guestName: 'William y Mary', slot: 3, owner: 'cristian' }, // 0
  { guestName: 'Flia Diaz Martinez', slot: 4, owner: 'cristian' }, // 0
  { guestName: 'Flia Ramirez Rodriguez', slot: 3, owner: 'cristian' },
  { guestName: 'Yoeli Ramirez', slot: 2, owner: 'cristian' }, // 0
  { guestName: 'Dennys Blanco', slot: 2, owner: 'cristian' },
  { guestName: 'Flia Duran Ramirez', slot: 3, owner: 'cristian' }, // 2
  { guestName: 'Tia Chava y Jhoisber', slot: 2, owner: 'cristian' }, // 0
  { guestName: 'Tia Chela y Omar', slot: 2, owner: 'cristian' },
  { guestName: 'Tio Omar y Estela', slot: 2, owner: 'cristian' },
  { guestName: 'Tia Nelly', slot: 1, owner: 'cristian' }, // 0
  { guestName: 'Flia Ramirez Salas', slot: 4, owner: 'cristian' }, // 1
  { guestName: 'Flia Ramirez Torrado', slot: 4, owner: 'cristian' },
  { guestName: 'Flia Diaz Flauraud', slot: 4, owner: 'cristian' }, // 3
  { guestName: 'Flia Ramirez Leal', slot: 4, owner: 'cristian' },
  { guestName: 'Flia Ramirez Lopez', slot: 2, owner: 'cristian' },
  { guestName: 'Linda Ramirez', slot: 2, owner: 'cristian' },
  { guestName: 'Walfran Ramirez', slot: 1, owner: 'cristian' },
  { guestName: 'Flia Diaz Torrado', slot: 5, owner: 'cristian' },
  { guestName: 'Flia Vega Pineda', slot: 3, owner: 'cristian' },
  { guestName: 'Flia Serpa Quintero', slot: 5, owner: 'cristian' }, // 3
  { guestName: 'Wilder Horta', slot: 1, owner: 'cristian' },
  { guestName: 'Sergio Parra', slot: 1, owner: 'cristian' },
  { guestName: 'Jose y Sofia', slot: 2, owner: 'cristian' },
  { guestName: 'Yeslier y Sindy', slot: 2, owner: 'cristian' }, // 0
  { guestName: 'Sandy Martínez', slot: 1, owner: 'cristian' }, // 0
  { guestName: 'Fabio Contreras', slot: 1, owner: 'cristian' }, // 0
  { guestName: 'Isabella Arévalo', slot: 1, owner: 'cristian' },
  { guestName: 'Diego Miranda', slot: 1, owner: 'cristian' }, // 0
  { guestName: 'Jesús Guerrero', slot: 2, owner: 'cristian' },
  { guestName: 'Danuil y Leticia', slot: 2, owner: 'cristian' },
  { guestName: 'Flia Angarita Diaz', slot: 2, owner: 'cristian' },
  { guestName: 'Zinedine Sánchez', slot: 1, owner: 'jesby' },
  { guestName: 'Giselle Neira', slot: 1, owner: 'jesby' }, // 0
  { guestName: 'Madeleine Pabon', slot: 1, owner: 'jesby' }, // 0
  { guestName: 'Yury Arevalo', slot: 1, owner: 'jesby' }, // 0
  { guestName: 'Angie Rolón', slot: 1, owner: 'jesby' }, // 0
  { guestName: 'Mayerli Pacheco', slot: 1, owner: 'jesby' }, // 0
  { guestName: 'Ferney Niño', slot: 1, owner: 'jesby' }, // 0
  { guestName: 'Flia Duarte Forero', slot: 2, owner: 'jesby' }, // 0
  { guestName: 'Flia Pacheco Sanabria', slot: 2, owner: 'jesby' },
  { guestName: 'Flia Carrascal Contreras', slot: 2, owner: 'jesby' },
  { guestName: 'Flia Pacheco Niño', slot: 2, owner: 'jesby' },
  { guestName: 'Luz Marina Niño', slot: 1, owner: 'jesby' },
  { guestName: 'Flia Gaviria Pacheco', slot: 2, owner: 'jesby' },
  { guestName: 'Flia Guerro Lazaro', slot: 2, owner: 'jesby' }, // 0
  { guestName: 'Yulieth Niño', slot: 3, owner: 'jesby' }, // 0
  { guestName: 'Flia Pacheco Celedon', slot: 3, owner: 'jesby' },
  { guestName: 'Flia Florez Tarazona', slot: 4, owner: 'jesby' }, // 0
  { guestName: 'Flia Bautista Niño', slot: 3, owner: 'jesby' },
  { guestName: 'Rocsy Niño', slot: 1, owner: 'jesby' }

]

const normalizar = str =>
  str.toLowerCase().replace(/\s+/g, '')

const path = window.location.pathname // Devuelve "/jesby"
const segmentos = path.split('/').filter(Boolean) // ["jesby"]
const valor = decodeURIComponent(segmentos[0])
const gestName = document.querySelector('#guest-name')
const persona = invitados.find(guest => normalizar(guest.guestName) === normalizar(valor))
if (persona !== undefined) {
  const gestSlot = document.querySelector('#guest-slot')
  gestName.textContent = persona?.guestName?.toUpperCase()
  gestSlot.innerHTML = `<li id="guest-slot"><strong>💌 Cupos:</strong> ${persona.slot}</li>`
  const check = document.querySelector('#nav-item-check a')
  const phone = persona?.owner === 'jesby' ? '573152549452' : '573245892990'

  if (persona?.slot > 1) {
    const invitationText = document.querySelector('#invitation-text')
    invitationText.innerHTML = 'Queremos que formen parte de nuestra historia,<br> acompañándonos a celebrar nuestra unión.'
    check.href = `https://api.whatsapp.com/send?phone=${phone}&text=${persona?.guestName}%20confirmamos%20la%20asistencia%20de%20los%20${persona?.slot}%20invitados%0APara%20la%20boda%20de%20Cristian%20y%20Jesby%20`
  } else {
    check.href = `https://api.whatsapp.com/send?phone=${phone}&text=${persona?.guestName}%20confirmo%20la%20asistencia%0APara%20la%20boda%20de%20Cristian%20y%20Jesby%20`
  }
}
