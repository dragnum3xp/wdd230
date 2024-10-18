const baseURL = "https://github.com/dragnum3xp/wdd230"; 
const linksURL = "https://raw.githubusercontent.com/dragnum3xp/wdd230/refs/heads/main/data/links.json";  

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);  
}

const displayLinks = (weeks) => {
    weeks.forEach((week, index) => {
        let weekContainer = document.querySelector(`#week${index+1}-links`);  
        
        if (weekContainer) {  
            week.links.forEach((linkObj, linkIndex) => {
                let link = document.createElement("a");
                link.setAttribute("href", baseURL + '/' + linkObj.url);  
                link.textContent = linkObj.title;  
                link.setAttribute("target", "_blank");  
                
                weekContainer.appendChild(link);  

                if (linkIndex < week.links.length - 1) {
                    weekContainer.appendChild(document.createTextNode(" | ")); 
                }
                
            });
        }
    });
}

getLinks()