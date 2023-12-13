const openBtn = document.querySelector("#open-btn"),
home = document.querySelector(".home"),
form_container = document.querySelector(".form-container"),
formClose = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw-hide");


openBtn.addEventListener("click", () => home.classList.add("show"))
formClose.addEventListener("click", () => home.classList.remove("show"));


signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form_container.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form_container.classList.remove("active");
});