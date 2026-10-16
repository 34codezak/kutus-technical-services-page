/* =========================================================
   KUTUS TECHNICAL SERVICES
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");


/* =========================================================
   MOBILE MENU
========================================================= */

function openMenu() {

    if (!menuToggle || !mobileMenu) return;

    mobileMenu.classList.add("active");
    menuToggle.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );
}


function closeMenu() {

    if (!menuToggle || !mobileMenu) return;

    mobileMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


function toggleMenu() {

    if (!mobileMenu) return;

    const isOpen =
        mobileMenu.classList.contains("active");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}


/* =========================================================
   HAMBURGER CLICK
========================================================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            toggleMenu();

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE THE MENU
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!mobileMenu || !menuToggle) return;

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedButton =
            menuToggle.contains(event.target);

        if (
            mobileMenu.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedButton
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   CLOSE MOBILE MENU WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);


/* =========================================================
   RESPONSIVE MENU
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 900) {

            closeMenu();

        }

    }
);


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 8, 8, 0.98)";

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.background =
            "rgba(8, 8, 8, 0.94)";

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);

updateNavbar();


/* =========================================================
   CURRENT YEAR
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   CONTACT FORM → WHATSAPP
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    ?.value.trim() || "";

            const phone =
                document.getElementById("phone")
                    ?.value.trim() || "";

            const service =
                document.getElementById("service")
                    ?.value.trim() || "";

            const message =
                document.getElementById("message")
                    ?.value.trim() || "";


            if (
                !name ||
                !phone ||
                !service ||
                !message
            ) {

                alert(
                    "Please complete all the required fields."
                );

                return;

            }


            const whatsappNumber =
                "254753563851";


            const whatsappMessage =
`Hello Kutus Technical Services.

My name is ${name}.
Phone: ${phone}

Service needed:
${service}

Problem / Request:
${message}

I would like to get a quote or arrange a service visit.`;


            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetID);


                if (!target) {

                    return;

                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Kutus Technical Services website loaded successfully."
);