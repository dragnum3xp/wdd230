const year = new Date().getFullYear(); 
document.getElementById("year").textContent = year;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;

function formatDate(date) {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const dateString = date.toLocaleDateString('en-US'); 
    const timeString = date.toLocaleTimeString('en-US', options); 
    return `${dateString}, ${timeString}`;
}

function saveLastVisitDate() {
    const currentDate = new Date().toISOString();
    localStorage.setItem("lastVisitDate", currentDate);
}

function displayVisitMessage() {
    const lastVisitDate = localStorage.getItem("lastVisitDate");
    const displayMessageElement = document.querySelector("#displayMessage");
    const currentDate = new Date();

    if (!lastVisitDate) {
        displayMessageElement.textContent = "Welcome! Let us know if you have any questions."
    } else {
        const lastVisit = new Date(lastVisitDate);
        const timeDifference = currentDate - lastVisit;
        const daysDifference = Math.floor(timeDifference/ (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            displayMessageElement.textContent = "Back so soon! Awesome!"
        } else {
            displayMessageElement.textContent = `You last visited ${daysDifference} days ago`
        }
    }
}

function displayLastVisitDate() {
    const lastVisitDate = localStorage.getItem("lastVisitDate");
    const displayDateElement = document.getElementById("displayDate");

    if (lastVisitDate) {
        displayDateElement.textContent = formatDate(new Date(lastVisitDate));
    } else {
        displayDateElement.textContent = "Never";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    displayVisitMessage();
    displayLastVisitDate();
    saveLastVisitDate();
});

