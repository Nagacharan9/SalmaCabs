// script.js

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Show confirmation message
  alert('Thank you for booking with Salma Cabs! We will contact you soon.');

  // Optionally, reset the form
  this.reset();
});

