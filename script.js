// Cache elements
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const menuSection = document.getElementById('menu');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');
const menuForm = document.getElementById('menu-form');
const contactForm = document.getElementById('contact-form');

// Add event listeners
menuBtn.addEventListener('click', toggleMenu);
aboutBtn.addEventListener('click', toggleAbout);
contactBtn.addEventListener('click', toggleContact);
menuForm.addEventListener('submit', validateMenuForm);
contactForm.addEventListener('submit', validateContactForm);

// Functions
function toggleMenu() {
  menuSection.classList.toggle('active');
}

function toggleAbout() {
  aboutSection.classList.toggle('active');
}

function toggleContact() {
  contactSection.classList.toggle('active');
}

function validateMenuForm(e) {
  e.preventDefault();
  const dishName = document.getElementById('dish-name').value;
  const dishPrice = document.getElementById('dish-price').value;
  
  if (dishName === '' || dishPrice === '') {
    alert('Please fill in all fields');
  } else {
    alert('Menu item added successfully!');
  }
}

function validateContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert('Message sent successfully!');
  }
}