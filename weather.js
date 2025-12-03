// ------------------------------------
// FETCH WEATHER FROM GITHUB ACTION API
// ------------------------------------
async function loadWeather() {
  try {
    const response = await fetch("weather.json?" + new Date().getTime());
    const data = await response.json();

    // Temperature
    document.getElementById("weather-temp").innerText =
      data.temp + "°C";

    // Feels Like
    document.getElementById("weather-feels").innerText =
      data.feels_like + "°C";

    // Humidity
    document.getElementById("weather-humidity").innerText =
      data.humidity + "%";

    // Wind
    document.getElementById("weather-wind").innerText =
      data.wind + " m/s";

    // Weather Condition (Clouds, Clear, Haze, etc.)
    document.getElementById("weather-cond").innerText =
      data.condition;

    // City
    document.getElementById("weather-city").innerText =
      "📍 " + data.city;

  } catch (error) {
    console.error(error);
    document.getElementById("weather-temp").innerText = "Error";
  }
}

loadWeather();
