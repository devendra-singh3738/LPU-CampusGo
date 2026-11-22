
// CampusGo - Campus Navigation Website

// Search campus locations
function searchLocation() {

    const input = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".place-card");

    let found = 0;

    cards.forEach(function(card) {

        const locationName = card
            .querySelector("h3")
            .textContent.toLowerCase();

        if (locationName.includes(input) || input === "") {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    if (found === 0) {
        alert("Location not found! Please try another location.");
    }
}

// Search when Enter key is pressed
document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchLocation();
        }

    });

console.log("CampusGo Website Loaded Successfully!");
