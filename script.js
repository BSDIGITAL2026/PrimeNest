// =========================
// PROPERTY SEARCH
// =========================

const searchButton =
    document.getElementById("searchButton");

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


if (
    searchButton &&
    locationSelect &&
    propertyTypeSelect &&
    priceSelect
) {

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


        if (noResults) {

            if (visibleProperties === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const nameField =
            document.getElementById("name");

        const name =
            nameField
                ? nameField.value.trim()
                : "";


        if (formMessage && name) {

            formMessage.textContent =
                `Thank you, ${name}! Your message is being sent.`;

            formMessage.style.display =
                "block";

        }

        /*
         IMPORTANT:
         There is NO event.preventDefault()
         here.

         This allows the form to continue
         submitting to Formspree.
        */

    });

}


// =========================
// MOBILE NAVIGATION
// =========================

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

        mainNav.classList.toggle("mobile-open");

    });

}


// =========================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// =========================

if (mainNav) {

    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("mobile-open");

        });

    });

}


// =========================
// PROPERTY AUTO-FILL
// =========================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const propertyInterest =
    urlParams.get("property");


const propertyNames = {

    luxury:
        "Modern Luxury Residence",

    family:
        "Contemporary Family Home",

    villa:
        "Elegant Hillside Villa"

};


const propertyField =
    document.getElementById("propertyInterest");


if (
    propertyField &&
    propertyInterest &&
    propertyNames[propertyInterest]
) {

    propertyField.value =
        propertyNames[propertyInterest];

}