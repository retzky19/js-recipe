const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("rounded")) {
    figure.classList.add("triangle")
    figure.classList.remove("rounded")
    figure.classList.remove("square")
  } else if (figure.classList.contains("triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  } else {
    figure.classList.add("rounded")
  }
}
