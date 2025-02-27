// Automatic Gallery Transitions
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

function showNextImage() {
  // Hide the current image
  galleryItems[currentIndex].style.opacity = 0;

  // Move to the next image
  currentIndex = (currentIndex + 1) % galleryItems.length;

  // Show the next image
  galleryItems[currentIndex].style.opacity = 1;
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});