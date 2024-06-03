function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
function closeModal() {
  modalbg.style.display = "none";
}


// Form validation
// const submitBtn = document.getElementById('submit');
// submitBtn.addEventListener('click', function (event) {
//   if (validateForm(event)) {
//     alert('Merci pour votre inscription !');
//     closeModal();
//   }
// }
// );
function validateForm(event) {

  let isValid = true;

  // Validation du prénom
  const first = document.getElementById('first');
  const firstError = document.getElementById('first-error');
  if (first.value.trim().length < 2) {
    firstError.textContent = 'Le prénom doit contenir au moins 2 caractères.';
    isValid = false;
  } else {
    firstError.textContent = '';
  }

  // Validation du nom
  const last = document.getElementById('last');
  const lastError = document.getElementById('last-error');
  if (last.value.trim().length < 2) {
    lastError.textContent = 'Le nom doit contenir au moins 2 caractères.';
    isValid = false;
  } else {
    lastError.textContent = '';
  }

  // Validation de l'email
  const email = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = 'Veuillez entrer une adresse e-mail valide.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Validation de la quantité
  const quantity = document.getElementById('quantity');
  const quantityError = document.getElementById('quantity-error');
  if (quantity.value === '' || isNaN(quantity.value) || quantity.value < 0 || quantity.value > 99) {
    quantityError.textContent = 'Veuillez entrer un nombre valide entre 0 et 99.';
    isValid = false;
  } else {
    quantityError.textContent = '';
  }

  // Validation des boutons radio
  const location = document.getElementsByName('location');
  const locationError = document.getElementById('location-error');
  let locationChecked = false;
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      locationChecked = true;
      break;
    }
  }
  if (!locationChecked) {
    locationError.textContent = 'Veuillez sélectionner un tournoi.';
    isValid = false;
  } else {
    locationError.textContent = '';
  }

  // Validation de la case à cocher des conditions d'utilisation
  const privacyError = document.getElementById('privacy-error');
  const checkbox1 = document.getElementById('checkbox1');
  if (!checkbox1.checked) {
    privacyError.textContent = 'Vous devez accepter les conditions d\'utilisation.';
    isValid = false;
  }else {
    privacyError.textContent = '';
  }

  return isValid;
}