/********* DOM ELEMENTS *********/
const modalbg = document.querySelector(".bground");
const modalbgValidate = document.querySelector(".bground__validate");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("myForm");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const icon = document.querySelector(".icon");
const btnClose = document.querySelector(".btn-close");
const linkActive = document.querySelectorAll(".link__active");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioInput = document.querySelectorAll("input[type=radio]");
const checkbox1 = document.getElementById("checkbox1");

/********* REGEX ELEMENTS *********/
const regexName = /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/; // permet de vérifier si le prénom et le nom sont composés de lettres, d'espaces et de tirets
const regexEmail = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/; // permet de vérifier si l'email est au format
const regexBirthdate = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/; // permet de vérifier si la date de naissance est au format YYYY-MM-DD
const regexQuantity = /^0*?[0-9]\d*$/; // permet de vérifier si la quantité est un nombre entier positif

/********* EVENTS *********/
// Change class active
linkActive.forEach((a) => a.addEventListener("click", changeClassActive));

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event : cross
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal event : btn
btnClose.addEventListener("click", closeModal);

/******** FUNCTIONS ********/
// FUNCTION EDIT NAV (media querie)
icon.addEventListener("click", function () {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

// FUNCTION CHANGE CLASS ACTIVE ON NAV LINKS
function changeClassActive() {
  linkActive.forEach((a) => a.classList.remove("active"));
  this.classList.add("active");
}

// FUNCTION LAUNCH MODAL FORM AND MESSAGE OF VALIDATION
function launchModal() { // Form
  modalbg.style.display = "block";
}

function launchModalValidate() { // Message validation
  modalbgValidate.style.display = "block";
}

// FUNCTION CLOSE MODAL FORM AND MESSAGE OF VALIDATION
function closeModal() {
  modalbg.style.display = "none";
  modalbgValidate.style.display = "none";
}

// FUNCTIONS VALIDATION FORM
// Function verification Firstname
function checkFirstNameInput(firstName) {
  if (firstName.value.length >= 2 && firstName.value.length <= 100 && regexName.test(firstName.value)) {
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  } else if (firstName.value.length < 2 && regexName.test(firstName.value)) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  } else if (firstName.value.length > 100 && regexName.test(firstName.value)) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Ce champ ne peut pas contenir plus de 100 caractères.");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer votre prénom.");
    return false;
  }
}

// Function verification Lastname
function checkLastNameInput(lastName) {
  if (lastName.value.length >= 2 && lastName.value.length <= 100 && regexName.test(lastName.value)) {
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  } else if (lastName.value.length < 2 && regexName.test(lastName.value)) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  } else if (lastName.value.length > 100 && regexName.test(lastName.value)) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Ce champ ne peut pas contenir plus de 100 caractères.");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer votre nom.");
    return false;
  }
}

// Function verification Email
function checkEmailInput(email) {
  if (regexEmail.test(email.value)) {
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Vous devez saisir une adresse mail.");
    return false;
  }
}

// Function verification Birthdate
function checkBirthdateInput(birthdate) {
  const today = new Date();
  const yearMinimum = today.getFullYear() - 18; // age minimum 18 years
  const yearMaximum = today.getFullYear() - 80; // age maximum 80 years
  const birthdatePlayer = new Date(birthdate.value); // converts the value of the input birthdate to date
  const yearPlayer = birthdatePlayer.getFullYear(); // recovers the user's year of birth
  if (regexBirthdate.test(birthdate.value) && yearPlayer < yearMinimum && yearPlayer > yearMaximum) {
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  } else if (regexBirthdate.test(birthdate.value) && yearPlayer > yearMinimum) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez avoir plus de 18 ans.");
    return false;
  } else if (regexBirthdate.test(birthdate.value) && yearPlayer < yearMaximum) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous êtes un peu trop âgé pour participer à notre événement!");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    return false;
  }
}

// Function verification Number
function checkQuantityInput(quantity) {
  if (regexQuantity.test(quantity.value) && quantity.value >= 0 && quantity.value <= 99) {
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
  if (regexQuantity.test(quantity.value) && quantity.value > 100) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre compris entre 0 et 99.");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre.");
    return false;
  }
}

// Function verification Radio
function checkRadioInput(radioInput) {
  let checkRadioValid = 0;
  radioInput.forEach((location) => { // look if a button is checked
    if (location.checked) {
      checkRadioValid = 1;
    }
  });
  if (checkRadioValid === 0) {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Vous devez choisir une ville.");
    return false;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
}

// Function verification Checkbox - Conditions générales
function checkBoxInput(checkbox1) {
  if (checkbox1.checked) {
    formData[6].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }
}

// Function submit form
addEventListener("submit", (e) => { //on submit, verify if the functions of verification are true
  e.preventDefault(); // if it's true, the form is reset and closed and the message of validation appears
  checkFirstNameInput(firstName);
  checkLastNameInput(lastName);
  checkEmailInput(email);
  checkBirthdateInput(birthdate);
  checkQuantityInput(quantity);
  checkRadioInput(radioInput);
  checkBoxInput(checkbox1);
  if (
    checkFirstNameInput(firstName) &&
    checkLastNameInput(lastName) &&
    checkEmailInput(email) &&
    checkBirthdateInput(birthdate) &&
    checkQuantityInput(quantity) &&
    checkRadioInput(radioInput) &&
    checkBoxInput(checkbox1) === true
  ) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      birthdate: birthdate.value,
      quantity: quantity.value,
      radioInput: radioInput.value,
      checkbox1: checkbox1.checked,
    })
    form.reset();
    closeModal();
    launchModalValidate();
  }
});