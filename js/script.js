button = document.getElementById("button");
menuToggle = document.getElementById("menuToggle");
menu = document.getElementById("menu");

menuToggle.addEventListener("click", addChangeMenu);
window.addEventListener("load", addDisplay);

window.onscroll = function() { scrollDisplay() };

function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function addDisplay() {
    menu.classList.add("display");
}

function addChangeMenu() {
    if (menu.classList.contains("display")) {
        menu.classList.remove("display");
    } else {
        setTimeout(function() {
            menu.classList.add("display");
        }, 250)
    }
}