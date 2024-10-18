const url = "https://raw.githubusercontent.com/dragnum3xp/wdd230/refs/heads/main/chamber/data/members.json"

const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    
    displayMembers(data.companies);
}

getMemberData();

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let logo = document.createElement("img");
        let address

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName)
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}