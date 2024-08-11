document.getElementById('consultation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log("Form submission started.");

    // Collecting form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value || 'Not provided';

    console.log("Collected Data:", {
        name: name,
        phone: phone,
        message: message,
        email: email
    });

    // Prepare form data for Google Forms
    const formData = new FormData();
    formData.append('entry.671590019', name);
    formData.append('entry.24669159', phone);
    formData.append('entry.1489358881', message);
    formData.append('entry.922504757', email);

    console.log("FormData prepared for submission.");

    // Send the data to Google Forms
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSdFEPeyOfHLxt3WIvapwXsEt6OYaSp2cw9ixbTUAIsC4Wx5Dw/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(function() {
        console.log("Form submitted successfully.");
        alert('Your query has been submitted successfully.');
        document.getElementById('consultation-form').reset();
    }).catch(function(error) {
        console.error('Form submission failed!', error.message);
        alert('Sorry, there was an error submitting your form.');
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 5000); // Change image every 5 seconds
});