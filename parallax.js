window.addEventListener('scroll', function() {
  var scrolled = window.pageYOffset;
  var parallaxImage = document.querySelector('.parallax-container');
  parallaxImage.style.transform = 'translateY(' + (scrolled * 0.2) + 'px)'; /* Adjust the position of the image based on the scroll position */
});
