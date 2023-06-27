function showAlert() { alert('¡Hola,esta es una alerta desde JavaScript!');}

const form = document.getElementById('myForm');

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
                      
                      // Obtener referencias a los elementos del DOM
const buttonMenuToggle = document.querySelector('.button-menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Agregar el evento click al botón del menú
buttonMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}