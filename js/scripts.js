const togglleBnt = document.querySelector(".header__toggle--btn");
const nav = document.querySelector("nav");

togglleBnt.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
