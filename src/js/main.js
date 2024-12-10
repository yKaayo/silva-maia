// Navbar
const btnMenu = document.querySelector("#menuToX");
const menuIcon = btnMenu.querySelector(".bi");

btnMenu.addEventListener("click", () => {
    menuIcon.classList.toggle("bi-justify-right");
    menuIcon.classList.toggle("bi-x");
});
