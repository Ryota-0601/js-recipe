const display = document.getElementById("display")
const plusButton = document.getElementById("plusButton")

let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}
