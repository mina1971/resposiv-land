// Navigation menu
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Smooth scrolling
const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });

    navMenu.classList.remove('show');
  });
});

// Pricing switcher
const pricingSwitcher = document.querySelector('#pricing-switcher');
const pricingBoxes = document.querySelectorAll('.pricing-box');

pricingSwitcher.addEventListener('change', () => {
  pricingBoxes.forEach((box) => {
    box.classList.toggle('show-annual');
  });
});

// Contact form submission
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Send form data to server
  fetch('submit-form.php', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Form submitted successfully!');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    });
});
