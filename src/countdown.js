const diasEl = document.getElementById('days')
const horasEl = document.getElementById('hours')
const minutosEl = document.getElementById('minutes')
const segundosEl = document.getElementById('seconds')

const fechaObjetivo = new Date('2026-05-02T00:00:00')

function actualizarCuentaRegresiva () {
  const ahora = new Date()
  const diferencia = fechaObjetivo - ahora

  if (diferencia <= 0) {
    // Si ya llegó la fecha
    diasEl.innerText = '0'
    horasEl.innerText = '0'
    minutosEl.innerText = '0'
    segundosEl.innerText = '0'
    return
  }

  const segundos = Math.floor((diferencia / 1000) % 60)
  const minutos = Math.floor((diferencia / 1000 / 60) % 60)
  const horas = Math.floor((diferencia / 1000 / 60 / 60) % 24)
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

  diasEl.innerText = dias
  horasEl.innerText = horas.toString().padStart(2, '0')
  minutosEl.innerText = minutos.toString().padStart(2, '0')
  segundosEl.innerText = segundos.toString().padStart(2, '0')
}

// Actualizar cada segundo
actualizarCuentaRegresiva() // inicial
setInterval(actualizarCuentaRegresiva, 1000)
