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

  // Validation de la date de naissance
  const birthdate = document.getElementById('birthdate');
  const birthdateError = document.getElementById('birthdate-error');
  // si la date de naissance est vide
  if (birthdate.value.length < 1) {
    birthdateError.textContent = 'Veuillez entrer votre date de naissance.';
    isValid = false;
  }

  // la date de naissance doit être au moins 13 ans et ne doit pas être dans le futur
  const date = new Date();
  const currentYear = date.getFullYear();
  const birthdateYear = new Date(birthdate.value).getFullYear();
  if (birthdate.value.length > 1) {
    if (currentYear - birthdateYear < 13 || new Date(birthdate.value) > date) {
      birthdateError.textContent = 'Vous devez avoir au moins 13 ans pour vous inscrire.';
      isValid = false;
    } else {
      birthdateError.textContent = '';
    }
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
  } else {
    privacyError.textContent = '';
  }



  if (isValid) {
    const data = {
      first: first.value,
      last: last.value,
      email: email.value,
      birthdate: birthdate.value,
      quantity: quantity.value,
      location: locationChecked,
      privacy: checkbox1.checked
    };
    const form = document.getElementById('form');
    form.style.display = 'none';
    const confirmation = document.getElementById('confirmation');
    confirmation.textContent = `Merci pour votre inscription ${data.first} ${data.last} !`;
    // positionner au centre 
    confirmation.style.display = 'flex';
    confirmation.style.justifyContent = 'center';
    confirmation.style.alignItems = 'center';

    const btnSubmit = document.getElementById('btn-close');
    btnSubmit.addEventListener('click', closeModal);
  }

  return null;
}