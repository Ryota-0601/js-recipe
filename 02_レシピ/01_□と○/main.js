const figure = document.getElementById("figure")

/*
figure.onclick = function() {
  figure.classList.toggle("rounded")
}
*/

figure.onclick = function() {
  if (figure.classList.contains("square")) {
    figure.classList.add("rounded")
  } else if (figure.classList.contains("square rounded")) {
    figure.classList.remove("square rounded")

    figure.classList.add("triangle")
  } else if (figure.classList.contains("triangle")) {
    figure.classList.add("square")
    figure.classList.remove("triangle")
  }
}
