const url = "data/members.json"

const cards = document.querySelector("article");
const list = document.querySelector("#list");

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

        let title = document.createElement("p")
        let logo = document.createElement("img");
        let address = document.createElement("p")
        let phone = document.createElement("p")
        let site = document.createElement("a")

        title.textContent = company.name;
        logo.setAttribute("src", company.icon)
        logo.setAttribute("alt", company.name)
        logo.setAttribute("loading", "lazy")
        logo.setAttribute("width", "240")
        logo.setAttribute("height", "240")
        address.textContent = company.address;
        phone.textContent = company.phone;
        site.setAttribute("href", company.url)
        site.textContent = company.url;

        card.appendChild(title)
        card.appendChild(logo)
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(site);

        cards.appendChild(card);
    });
}