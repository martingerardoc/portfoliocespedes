let menubtn = document.querySelector("#menubtn");
let mobilemenu = document.querySelector("#mobilemenu");

menubtn.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});