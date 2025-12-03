// ------------------------------------
// FETCH WEATHER FROM GITHUB ACTION API
// ------------------------------------
async function loadWeather() {
  try {
    const response = await fetch("weather.json?" + new Date().getTime());
    const data = await response.json();

    document.getElementById("weather-temp").innerText =
      data.temp + "°C";
    document.getElementById("weather-city").innerText =
      "📍 " + data.city;
  } catch (error) {
    document.getElementById("weather-temp").innerText = "Error";
  }
}

loadWeather();
