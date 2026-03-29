const nav_rwd = document.querySelector("#nav-rwd");
const nav_list_btn = document.querySelector("#nav_list_btn");
const nav_close = document.querySelector("#nav-close");

const navbar = document.querySelector(".navbar");

nav_list_btn.addEventListener("click", () => {
    nav_rwd.classList.add("active");
});

nav_close.addEventListener("click", () => {
    nav_rwd.classList.remove("active");
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});