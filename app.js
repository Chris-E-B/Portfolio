let contact_button = document.getElementById("times");
let contact = document.getElementById("contact_container");
let contact_link = document.getElementById("contact_link");
let burger = document.getElementById("burger");
let nav = document.getElementById("nav_list");

contact_button.addEventListener("click", () => {
    contact.style.visibility = "hidden";
})

contact_link.addEventListener("click", () => {
    contact.style.visibility = "visible";
})

burger.addEventListener("click", () => {
    nav.style.visibility= "visible";
})