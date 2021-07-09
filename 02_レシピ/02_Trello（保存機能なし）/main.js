const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
const container2 = document.getElementById("cards-container2")
const inputElement2 = document.getElementById("input-todo2")
const container3 = document.getElementById("cards-container3")
const inputElement3 = document.getElementById("input-todo3")

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

inputElement.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
  }
}

inputElement2.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement2.value)
    container2.append(card)

    inputElement2.value = ""
  }
}

inputElement3.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement3.value)
    container3.append(card)

    inputElement3.value = ""
  }
}

const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

/*
inputElement.addEventListener("keypress", enter)

const enter = function(e) {
  if (e.keyCode === 13) {
    const text = inputElement.value

    //cardを作成
    const card = document.createElement("div")
    card.className = "card"

    //todoを作成
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    card.append(todo)

    //deleteButtonを作成
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    deleteButton.onclick = function() {
      card.remove()
    }
    card.append(deleteButton)

    container.append(card)

    inputElement.value = ""
  } else {
    return
  }
}

*/
