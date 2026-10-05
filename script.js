/* =========================================
   FALL VIBE JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- MOBILE MENU ---------- */

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (menuButton && mainNav) {

        menuButton.addEventListener("click", function () {

            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuButton.textContent = isOpen ? "×" : "☰";

        });


        /* Close menu after clicking a link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                mainNav.classList.remove("open");
                menuButton.textContent = "☰";
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });

        });

    }


    /* ---------- CURRENT YEAR ---------- */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ---------- IMAGE ERROR FALLBACK ---------- */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.alt = "Fall scenery image";

        });

    });

});
