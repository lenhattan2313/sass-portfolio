//variables
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const navBranding = document.querySelector(".menu-branding");
const navMenu = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleClassMenu);
function toggleClassMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  navMenu.classList.toggle("show");
  navBranding.classList.toggle("show");
  navItem.forEach(item => item.classList.toggle("show"));
}
