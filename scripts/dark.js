const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
//const h1 = document.querySelector("h1");
//const html = document.querySelector("html")

modeButton.addEventListener('click', () => {
	if (modeButton.textContent.includes("🕶️")) {
		//html.style.background = "#000";
		main.style.background = "#000";
		//h1.style.color = "#fff";
		//h1.style.background = "#000";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
        //html.style.background = "#eee";
		//h1.style.color = "#000";
        //h1.style.background = "#eee";
		modeButton.textContent = "🕶️";
	}
});