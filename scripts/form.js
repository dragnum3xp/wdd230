const kp1 = document.querySelector("#passw");
const kp2 = document.querySelector("#passw2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);


function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");


range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}