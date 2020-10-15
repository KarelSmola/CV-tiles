// Selectors
const btnBeforeContent = document.querySelectorAll("button").length;

for (let i = 0; i < btnBeforeContent; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", toggleContent);
}

function toggleContent(e) {
  if (e.target.nextElementSibling.style.display === "flex") {
    e.target.nextElementSibling.style.display = "none";
  } else {
    e.target.nextElementSibling.style.display = "flex";
  }
}
