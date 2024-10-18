const url = "https://raw.githubusercontent.com/dragnum3xp/wdd230/refs/heads/main/chamber/data/members.json"

const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    
    displayMembers(data.companies);
}

getMemberData();

const displayMembers = (companies) => {
    Object.keys(companies).forEach((key) => {
        let company = companies[key];
        let card = document.createElement("section");

        let logo = document.createElement("img");
        let address = document.createElement("p")
        let phone = document.createElement("p")
        let site = document.createElement("a")

        logo.setAttribute("src", company.icon)
        logo.setAttribute("alt", company.name)
        logo.setAttribute("loading", "lazy")
        logo.setAttribute("width", "340")
        logo.setAttribute("height", "340")
        address.textContent = company.address;
        phone.textContent = company.phone;
        site.setAttribute("href", company.url);


        card.appendChild(logo)
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(site);

        cards.appendChild(card);
    });
}