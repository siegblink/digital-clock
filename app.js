const clock = document.querySelector('.clock')
clock.parentElement.style.background = '#444'

function tick() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  const html = `
    <span>${hour}</span> :
    <span>${minute}</span> :
    <span>${second}</span>
  `
  clock.innerHTML = html
}

setInterval(tick, 1000)
