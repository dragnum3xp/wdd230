const year = new Date().getFullYear(); 
document.getElementById("year").textContent = year;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;