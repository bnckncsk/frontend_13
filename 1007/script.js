const $ = (id) => document.getElementById(id);
const ß = (element) => document.createElement(element);

async function kereses() {
    let varos = $('varos').value.trim();

    const citySearch = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${varos}&limit=1&appid=c7f1c6bc4ebd3b4dd8b79dbe1fc2dc27`;

    const cityResponse = await fetch(citySearch);
    const cityData = await cityResponse.json();
    console.log(cityData);

    const lat = cityData[0].lat;
    const lon = cityData[0].lon;

    const url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c7f1c6bc4ebd3b4dd8b79dbe1fc2dc27&units=metric&lang=hu`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    fillCard(data);
}


let fillCard = data => {
    $('city').innerText = data.city.name;
    $('country').innerText = data.city.country;

    for (let i = 1; i <= 5; i++) {
        $(`card${i}`).innerHTML = "";
    }

    for (let i = 0; i < 5; i++) {
        const dayData = data.list[i*8];

        const date = dayData.dt_txt.substring(0, 10);
        const temperature = dayData.main.temp;
        const pressure = dayData.main.pressure;
        const humidity = dayData.main.humidity;
        const weather = dayData.weather[0].description;
        const weatherIcon = dayData.weather[0].icon;
        const wind = dayData.wind.speed;

        const cardId = `card${i+1}`;

        const cardDate = ß('p');
        cardDate.innerText = date;
        const cardTemp = ß('p');
        cardTemp.innerText = `${Math.round(temperature)} °C`;
        const cardWeather = ß('p');
        cardWeather.innerText = weather;
        const img = ß('img');
        img.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        const cardWind = ß('p');
        cardWind.innerText = `Szélsebesség: ${wind} m/s`;
        const cardPres = ß('p');
        cardPres.innerText = `Légnyomás: ${pressure} hPa`;
        const cardHum = ß('p');
        cardHum.innerText = `Páratartalom: ${humidity}%`;

        const card = $(`${cardId}`);
        card.appendChild(cardDate);
        card.appendChild(cardTemp);
        card.appendChild(cardWeather);
        card.appendChild(img);
        card.appendChild(cardWind);
        card.appendChild(cardPres);
        card.appendChild(cardHum);

        card.style.display = 'inline-block'
    }
}

$('kereses').addEventListener('click', kereses);
$('varos').addEventListener('keypress', (e) =>{
    if (e.key == 'Enter') {
        kereses();
    }
})