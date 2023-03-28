const bgImage = document.querySelector('.bg-image');

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  bgImage.style.transform = `translate3d(0, -${offset * 0.3}px, 0)`; /* adjust the scroll speed by changing the multiplier */
});
