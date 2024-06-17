const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const homeLink = document.querySelector(".home-link");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  homeLink.classList.add("move-right");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  homeLink.classList.remove("move-right");
});
