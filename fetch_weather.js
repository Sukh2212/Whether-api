import fs from "fs";
import fetch from "node-fetch";

const API_KEY = process.env.WEATHER_API_KEY;
const CITY = "YourCityName";  // replace with your city

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const temperature = data.main.temp;
    const desc = data.weather[0].description;

    const output = `
<div id="weather-box">
  <p><strong>City:</strong> ${CITY}</p>
  <p><strong>Temperature:</strong> ${temperature}°C</p>
  <p><strong>Condition:</strong> ${desc}</p>
</div>
`;

    fs.writeFileSync("weather.html", output);
    console.log("Weather updated!");
  } catch (e) {
    console.log("Error fetching weather:", e);
  }
}

getWeather();
