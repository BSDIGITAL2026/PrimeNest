// =========================
// PROPERTY SEARCH
// =========================

const searchButton = document.getElementById("searchButton");

const locationSelect =
    document.getElementById("location");

const propertyTypeSelect =
    document.getElementById("property-type");

const priceSelect =
    document.getElementById("price");

const propertyCards =
    document.querySelectorAll(".property-card");

const noResults =
    document.getElementById("noResults");


searchButton.addEventListener("click", function () {

    const selectedLocation =
        locationSelect.value;

    const selectedType =
        propertyTypeSelect.value;

    const selectedPrice =
        priceSelect.value;

    let visibleProperties = 0;


    propertyCards.forEach(function (card) {

        const cardLocation =
            card.dataset.location;

        const cardType =
            card.dataset.type;

        const cardPrice =
            Number(card.dataset.price);


        const locationMatches =
            selectedLocation === "all" ||
            selectedLocation === cardLocation;


        const typeMatches =
            selectedType === "all" ||
            selectedType === cardType;


        const priceMatches =
            selectedPrice === "all" ||
            cardPrice >= Number(selectedPrice);


        if (
            locationMatches &&
            typeMatches &&
            priceMatches
        ) {

            card.style.display = "block";

            visibleProperties++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProperties === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received. We'll get back to you shortly.`;

    formMessage.style.display = "block";

    contactForm.reset();

});


// =========================
// MOBILE NAVIGATION
// =========================

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("mobile-open");

});


// =========================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// =========================

const navLinks =
    mainNav.querySelectorAll("a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("mobile-open");

    });

});