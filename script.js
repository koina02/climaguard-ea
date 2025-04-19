// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  console.log("ClimaGuard EA Loaded");

  const cookieBanner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookie');

  acceptBtn.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', true);
  });

  // Show banner if not already accepted
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'flex';
  } else {
    cookieBanner.style.display = 'none';
  }
});
