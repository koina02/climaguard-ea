// Placeholder for future functionality like weather data, AQI, and anomalies
document.addEventListener('DOMContentLoaded', () => {
    console.log("ClimaGuard Loaded - Features Coming Soon!");

    // Simulating map interaction for client preview
    const mapContainer = document.querySelector('.map-container');

    mapContainer.addEventListener('click', () => {
        // Simulate a zoom effect or a popup
        alert("This would zoom into the map, or show detailed climate data at this point!");
    });

    // Feature cards interaction - hover animation for a more engaging UI
    const featureCards = document.querySelectorAll('.feature-cards .card');

    featureCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = "scale(1)";
        });
    });

    // Simulate fetching weather data and showing it in the console for now
    setTimeout(() => {
        const weatherData = {
            temperature: "25°C",
            humidity: "65%",
            condition: "Clear skies"
        };

        console.log("Mock Weather Data:", weatherData);
        alert(`Weather Data (Mock): Temperature: ${weatherData.temperature}, Condition: ${weatherData.condition}`);
    }, 2000);

    // Simulate alert for Anomaly Detection (Wildfire or Flood)
    setTimeout(() => {
        const anomaly = {
            type: "Wildfire",
            location: "Northern Kenya",
            severity: "High"
        };

        console.log("Anomaly Detected:", anomaly);
        alert(`Anomaly Alert: A ${anomaly.type} has been detected in ${anomaly.location}. Severity: ${anomaly.severity}`);
    }, 5000);
});
