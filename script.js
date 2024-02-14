let pop = document.querySelector(".pop");
let share = document.querySelector(".share");
let icon = document.getElementById("icon");
let colored = document.getElementById("colored");
share.addEventListener("click", () => {
  pop.classList.toggle("visible");
  share.classList.toggle("active");
  colored.classList.toggle("colored");
});
