const map = L.map("map").setView([0.0236, 37.9062], 6); // Centered on Kenya

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// OpenWeatherMap API integration
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const weatherInfo = document.getElementById("weather-info");

async function fetchWeather(lat, lon) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const desc = data.weather[0].description;
    const temp = data.main.temp;
    const city = data.name;

    weatherInfo.innerText = `Weather in ${city}: ${desc}, ${temp}°C`;
  } catch (err) {
    weatherInfo.innerText = "Could not fetch weather data.";
    console.error(err);
  }
}

// Track user location
function locateUser() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      map.setView([latitude, longitude], 10);
      L.marker([latitude, longitude]).addTo(map)
        .bindPopup("You are here.")
        .openPopup();
      fetchWeather(latitude, longitude);
    },
    () => {
      alert("Could not access your location.");
    }
  );
}

// Default weather at center
fetchWeather(0.0236, 37.9062);
