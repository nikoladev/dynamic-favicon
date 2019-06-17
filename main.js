const wrapperDiv = document.getElementById('wrapper')
const link = document.getElementById('favicon')
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

wrapperDiv.appendChild(canvas)

const slowDown = 20
const size = 64
const halfSize = size / 2
const twoPi = Math.PI * 2
canvas.width = size
canvas.height = size

let prevY = Number.MIN_SAFE_INTEGER

const changeColor = ({ clientY }) => {
  const currentY = Math.floor(clientY / 2)
  if (currentY === prevY) {
    return
  }

  ctx.clearRect(0, 0, size, size)
  prevY = currentY
  ctx.beginPath()
  ctx.arc(halfSize, halfSize, halfSize - 1, 0, twoPi)
  ctx.fillStyle = `hsl(${currentY} 90% 50%)`
  ctx.fill()

  link.href = canvas.toDataURL('image/png')
}

// window.addEventListener('mousemove', changeColor)

let prevScrollY = Number.MIN_SAFE_INTEGER

window.addEventListener('scroll', () => {
  const { scrollY } = window
  if (prevScrollY === scrollY) {
    return
  }

  ctx.clearRect(0, 0, size, size)
  prevScrollY = scrollY
  ctx.beginPath()
  ctx.arc(halfSize, halfSize, halfSize - 1, 0, twoPi)
  ctx.fillStyle = `hsl(${scrollY} 90% 50%)`
  ctx.fill()

  link.href = canvas.toDataURL('image/png')
})
