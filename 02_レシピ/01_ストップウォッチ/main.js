const display = document.getElementById("display")
const startButton = document.getElementById("startButton")

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
}

let id = null

startButton.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    startButton.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    startButton.textContent = "start"
  }
}
