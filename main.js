console.log("hello world");

//let box;
//const box2 = 3;
const mobileMenu = document.querySelector(".mobile-menu");//turns .mobile-menu into variable, mobileMenu.
//querySelector means go find. it finds a selector like div, paragraph etc.

function openMenu()
{
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
}

function closeMenu() {
    mobileMenu.style.display = "none";
    document.body.style.overflowY = "scroll";
}