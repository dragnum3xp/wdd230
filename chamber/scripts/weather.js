
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");


const myLat = "-3.885498815622216";
const myLong = "-38.358125522949976";
const myKey = "ed9b66f3b0144ece632f8ef7388b0eb1";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}


const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString("en-US", options); 
}


function displayForecast(data) {
    const forecastList = data.list;

   
    const forecastByDate = {};

    forecastList.forEach(item => {
        const date = item.dt_txt.split(" ")[0];
        if (!forecastByDate[date]) {
            forecastByDate[date] = {
                temp: item.main.temp.toFixed(1),
                icon: item.weather[0].icon,
                description: item.weather[0].description
            };
        }
    });

   
    const dates = Object.keys(forecastByDate).slice(1, 4);

    
    dates.forEach((date, index) => {
        const forecastTemp = document.querySelectorAll('.forecast-temp')[index];
        const forecastIcon = document.querySelectorAll('.forecast-icon')[index];
        const forecastDesc = document.querySelectorAll('.forecast-desc')[index];

        const forecast = forecastByDate[date];
        forecastTemp.textContent = `${forecast.temp}°F`;
        forecastIcon.src = `https://openweathermap.org/img/wn/${forecast.icon}@2x.png`;
        forecastIcon.alt = forecast.description;
        forecastDesc.textContent = forecast.description;

        
        const forecastDateElement = document.createElement('p');
        forecastDateElement.textContent = formatDate(date); 
        document.querySelector(`.forecast-day:nth-of-type(${index + 1})`).prepend(forecastDateElement);
    });
}


apiFetch();
apiFetchForecast();
