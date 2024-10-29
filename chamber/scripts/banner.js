document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector(".card");
    const today = new Date().getDay();

    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = "block";
    }
});

function closeBanner() {
    const banner = document.querySelector(".card");
    banner.style.display = "none";
}