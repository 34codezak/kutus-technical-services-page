// ================= MOBILE MENU =================

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function closeMenu() {

    document.getElementById("mobileMenu").style.display = "none";

}


// ================= RESPONSIVE MENU =================

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        document.getElementById("mobileMenu").style.display = "none";

    }

});


// ================= COPYRIGHT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= NAVBAR SCROLL =================

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8, 8, 8, 0.98)";

    } else {

        navbar.style.background = "rgba(8, 8, 8, 0.94)";

    }

});
