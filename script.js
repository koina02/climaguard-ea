// Simulated data
document.getElementById('temperature').textContent = `${Math.floor(Math.random() * 15 + 20)}°C`;
document.getElementById('rainfall').textContent = `${Math.floor(Math.random() * 150)} mm`;
document.getElementById('anomalies').textContent = `${Math.floor(Math.random() * 5)}`;

// Chart.js climate trend
const ctx = document.getElementById('climateChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Avg Temp (°C)',
      data: [28, 30, 33, 35, 34, 32],
      borderColor: '#1d2955',
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: false }
    }
  }
});
let startX = 0;
document.body.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.body.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // Swipe left detected
    document.getElementById('analysis-panel').classList.add('active');
  }
});

function closePanel() {
  document.getElementById('analysis-panel').classList.remove('active');
}
let startX = 0;
document.body.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.body.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    document.getElementById('analysis-panel').classList.add('active');
  }
});

function closePanel() {
  document.getElementById('analysis-panel').classList.remove('active');
}
