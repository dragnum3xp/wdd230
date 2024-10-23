const json_url = "data/members.json";

const cards = document.querySelector("article");

async function getMemberData() {
    const response = await fetch(json_url);
    const data = await response.json();
    displayAd(data.companies);
}

getMemberData();

const displayAd = (companies) => {
    const eligibleCompanies = Object.values(companies).filter(company => 
        company.membership === "Gold" || company.membership === "Silver"
    );

    const shuffledCompanies = eligibleCompanies.sort(() => 0.5 - Math.random());

    const selectedCompanies = shuffledCompanies.slice(0, 3);

    selectedCompanies.forEach((company) => {
        let card = document.createElement("section");

        let title = document.createElement("p");
        let logo = document.createElement("img");

        title.textContent = company.name;
        logo.setAttribute("src", company.icon);
        logo.setAttribute("alt", company.name);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "240");
        logo.setAttribute("height", "240");

        card.appendChild(title);
        card.appendChild(logo);

        cards.appendChild(card);
    });
};
