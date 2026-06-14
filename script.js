// =========================================
// COLLEGE CLUB MANAGEMENT PORTAL
// script.js
// =========================================

// Page Load
window.onload = function () {
    console.log("College Club Management Portal Loaded");
};

// =========================================
// REGISTRATION FORM VALIDATION
// =========================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const studentid = document.getElementById("studentid");
        const email = document.getElementById("email");

        if (name && name.value.trim() === "") {
            alert("Please enter your Full Name.");
            return;
        }

        if (studentid && studentid.value.trim() === "") {
            alert("Please enter your Student ID.");
            return;
        }

        if (email && email.value.trim() === "") {
            alert("Please enter your Email.");
            return;
        }

        // Show Success Popup
        const popup = document.getElementById("successPopup");

        if (popup) {
            popup.style.display = "flex";
        }

        // Clear Form
        form.reset();

    });

}

// =========================================
// CLOSE SUCCESS POPUP
// =========================================

function closePopup() {

    const popup = document.getElementById("successPopup");

    if (popup) {
        popup.style.display = "none";
    }

}

// =========================================
// EVENT SEARCH
// =========================================

const searchInput = document.querySelector(".search-container input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".event-card");

        cards.forEach(function (card) {

            let text = card.innerText.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================================
// CARD HOVER ANIMATION
// =========================================

const cards = document.querySelectorAll(
    ".club-card, .card, .highlight-card"
);

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "scale(1)";

    });

});

// =========================================
// ACHIEVEMENT COUNTER ANIMATION
// =========================================

const numbers = document.querySelectorAll(".number");

numbers.forEach(function (num) {

    let text = num.innerText.replace("+", "");

    let target = parseInt(text);

    if (!isNaN(target)) {

        let count = 0;

        let speed = Math.max(20, 1000 / target);

        let updateCounter = setInterval(function () {

            count++;

            if (num.innerText.includes("+")) {
                num.innerText = count + "+";
            } else {
                num.innerText = count;
            }

            if (count >= target) {

                if (text.includes("+")) {
                    num.innerText = target + "+";
                } else {
                    num.innerText = target + "+";
                }

                clearInterval(updateCounter);
            }

        }, speed);

    }

});

// =========================================
// NAVBAR ACTIVE LINK
// =========================================

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    let file = link.getAttribute("href");

    if (file === currentPage) {

        link.style.color = "#38bdf8";
        link.style.fontWeight = "bold";

    }

});
