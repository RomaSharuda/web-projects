document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.grid img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      window.open(img.src, '_blank');
    });
  });
});
