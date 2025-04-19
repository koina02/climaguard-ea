document.addEventListener("DOMContentLoaded", () => {
  const weatherBox = document.getElementById("weather-info");
  const alertBox = document.getElementById("alert-box");
  const form = document.getElementById("report-form");
  const confirmation = document.getElementById("report-confirmation");

  // Simulate pulling weather from OpenWeatherMap
  const dummyWeather = {
    temp: 36,
    humidity: 60,
    rainfall: 5,
    wind: 12,
  };

  weatherBox.innerHTML = `
    <p>Temperature: ${dummyWeather.temp}°C</p>
    <p>Humidity: ${dummyWeather.humidity}%</p>
    <p>Rainfall: ${dummyWeather.rainfall} mm</p>
    <p>Wind: ${dummyWeather.wind} km/h</p>
  `;

  // Anomaly check
  if (dummyWeather.temp > 35 || dummyWeather.rainfall > 50) {
    alertBox.innerHTML = `<strong>Warning:</strong> Potential climate anomaly detected!`;
    alertBox.style.color = "red";
  } else {
    alertBox.innerHTML = "All climate metrics within normal range.";
    alertBox.style.color = "green";
  }

  // Handle climate report
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const event = document.getElementById("event").value;
    const desc = document.getElementById("description").value;
    console.log("Event logged:", event, desc);

    confirmation.innerText = "Report submitted. Thank you!";
    form.reset();
  });
});
