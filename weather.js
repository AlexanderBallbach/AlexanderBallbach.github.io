async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&units=imperial&appid=YOUR_API_KEY`);
    const data = await response.json();
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°F`;
    document.getElementById('desc').innerText = data.weather[0].description.toUpperCase();
}
getWeather();
