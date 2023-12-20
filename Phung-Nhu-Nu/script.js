const overlays = document.querySelectorAll('.overlay');

overlays.forEach((overlay) => {
  overlay.addEventListener('click', () => {
    overlay.style.opacity = 0;
  });
});