async function loadWeather() {
  try {
    const response = await fetch("weather.json?" + new Date().getTime());
    const data = await response.json();

    // Safety checks: only set text if element exists
    const tempEl = document.getElementById("weather-temp");
    const feelsEl = document.getElementById("weather-feels");
    const humidityEl = document.getElementById("weather-humidity");
    const windEl = document.getElementById("weather-wind");
    const condEl = document.getElementById("weather-cond");
    const iconEl = document.getElementById("weather-icon");
    const cityEl = document.getElementById("weather-city");

    if (tempEl) tempEl.innerText = data.temp + "°C";
    if (feelsEl) feelsEl.innerText = data.feels_like + "°C";
    if (humidityEl) humidityEl.innerText = data.humidity + "%";
    if (windEl) windEl.innerText = data.wind + " m/s";
    if (condEl) condEl.innerText = data.condition;
    if (iconEl) iconEl.innerText = getWeatherIcon(data.condition);
    if (cityEl) cityEl.innerText = "📍 " + data.city;

  } catch (error) {
    console.error(error);

    // Set fallback for all elements
    const tempEl = document.getElementById("weather-temp");
    const feelsEl = document.getElementById("weather-feels");
    const humidityEl = document.getElementById("weather-humidity");
    const windEl = document.getElementById("weather-wind");
    const condEl = document.getElementById("weather-cond");
    const iconEl = document.getElementById("weather-icon");
    const cityEl = document.getElementById("weather-city");

    if (tempEl) tempEl.innerText = "Error";
    if (feelsEl) feelsEl.innerText = "-";
    if (humidityEl) humidityEl.innerText = "-";
    if (windEl) windEl.innerText = "-";
    if (condEl) condEl.innerText = "-";
    if (iconEl) iconEl.innerText = "❓";
    if (cityEl) cityEl.innerText = "-";
  }
}

// Weather emoji helper
function getWeatherIcon(condition) {
  if (!condition) return "❓";
  condition = condition.toLowerCase();
  if (condition.includes("clear")) return "☀️";
  if (condition.includes("cloud")) return "☁️";
  if (condition.includes("rain")) return "🌧";
  if (condition.includes("thunder")) return "⚡";
  if (condition.includes("snow")) return "❄️";
  if (condition.includes("fog") || condition.includes("haze") || condition.includes("smog")) return "🌫";
  return "❓";
}

loadWeather();
