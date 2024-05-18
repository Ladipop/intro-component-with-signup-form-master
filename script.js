// This is my first DOM manipulation Code 😂😂

// Selectors
let form = document.querySelector(".form");
let FirstNameInput = document.querySelector(".first-name");
let FirstNameError = document.querySelector(".fn-error");
let LastNameInput = document.querySelector(".last-name");
let LastNameError = document.querySelector(".ln-error");
let EmailInput = document.querySelector(".email");
let EmailError = document.querySelector(".email-error");
let PasswordInput = document.querySelector(".password");
let PasswordError = document.querySelector(".password-error");
let FormBtn = document.querySelector(".form-btn");
let EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The real ass code
// document.addEventListener("DOMContentLoaded");
let Validate = (e) => {
  e.preventDefault();
  /* ******************************************First Name error handeling******************************************************** */
  let FirstName = FirstNameInput.value;
  let FirstNameCharacter = FirstName[0];
  // Function to put in all the reuseable errors
  let FirstNameErrorProcess = () => {
    FirstNameError.style.color = "Red";
    FirstNameError.style.fontSize = "0.6rem";
    FirstNameInput.style.borderColor = "Red";
    FirstNameInput.style.backgroundImage = "url(images/icon-error.svg)";
  };

  if (!FirstName) {
    FirstNameError.textContent = "Fill in Your First Name";
    FirstNameErrorProcess();
    return;
  } else if (
    FirstNameCharacter === FirstNameCharacter.toLowerCase() &&
    FirstNameCharacter !== FirstNameCharacter.toUpperCase()
  ) {
    // Checks if The first Name starts with an upper case letter
    FirstNameError.textContent =
      "Your First name should not start with a lower case";
    FirstNameErrorProcess();
    return;
  } else if (!isNaN(FirstName[0])) {
    // Checks if The first name starts with a number
    FirstNameError.textContent =
      "Your First name should not start with a number";
    FirstNameErrorProcess();
    return;
  } else {
    // Resets the styles back to normal
    FirstNameError.style.display = "none";
    FirstNameInput.style.borderColor = "initial";
    FirstNameInput.style.backgroundImage = "none";
    LastNameInput.focus();
  }

  /* ******************************************Last Name error handeling******************************************************** */
  let LastName = LastNameInput.value;
  let LastNameCharacter = LastName[0];
  // Reusable function To process the Last Name errors
  let LastNameErrorProcess = () => {
    LastNameError.style.color = "Red";
    LastNameError.style.fontSize = "0.6rem";
    LastNameInput.style.borderColor = "Red";
    LastNameError.style.display = "block";
    LastNameInput.style.backgroundImage = "url(images/icon-error.svg)";
  };
  if (!LastName) {
    LastNameError.textContent = "Fill in Your Last Name!";
    LastNameErrorProcess();
    return;
  } else if (
    LastNameCharacter === LastNameCharacter.toLowerCase() &&
    LastNameCharacter !== LastNameCharacter.toUpperCase()
  ) {
    // Checks if the last name starts with an upper case letter
    LastNameError.textContent =
      "Your Last name should start with an uppeercase letter";
    LastNameErrorProcess();
    return;
  } else if (!isNaN(LastName[0])) {
    // Checks if the Last Name starts with a number
    LastNameError.textContent = "Your Last Name sould not start with a number!";
    LastNameErrorProcess();
    return;
  } else {
    // Resets the styles back to normal
    LastNameInput.style.borderColor = "initial";
    LastNameError.style.display = "none";
    LastNameInput.style.backgroundImage = "none";
    EmailInput.focus();
  }

  /* ******************************************Email error handeling******************************************************** */
  let Email = EmailInput.value.trim();
  // Reusable email error function
  let EmailErrorProcess = () => {
    EmailInput.style.borderColor = "Red";
    EmailError.style.color = "Red";
    EmailError.style.fontSize = "0.6rem";
    EmailInput.style.backgroundImage = "url(images/icon-error.svg)";
  };
  if (Email == "") {
    // Checks if your email input feld contains anything or not
    EmailError.textContent = "Put in your Email";
    EmailErrorProcess();
    return;
  } else if (!EmailRegex.test(Email)) {
    // Checks if your email address is in the right format
    EmailError.textContent = "Wrong Email format!";
    EmailErrorProcess();
    return;
  } else {
    // Resets the styles back to normal
    EmailInput.style.borderColor = "initial";
    EmailError.textContent = "";
    EmailInput.style.backgroundImage = "none";
    PasswordInput.focus();
  }

  /* ******************************************Password error handeling******************************************************** */
  let Password = PasswordInput.value;
  // Reuseable password error function
  let PasswordErrorProcess = () => {
    PasswordError.style.color = "Red";
    PasswordError.style.fontSize = "0.6rem";
    PasswordInput.style.borderColor = "Red";
    PasswordInput.style.backgroundImage = "url(images/icon-error.svg)";
  };
  if (Password == "") {
    // Checks if the password is empty or not
    PasswordError.textContent = " Fill in Your password";
    PasswordErrorProcess();
    return;
  } else if (Password.length < 6) {
    // Checks if your your password length is less than 6 characters
    PasswordError.textContent = "Your password is too short!";
    PasswordErrorProcess();
    return;
  } else if (Password.length > 20) {
    // Checks if your your password length is more than 20 characters
    PasswordError.textContent = "Your password is too long";
    PasswordErrorProcess();
    return;
  } else {
    // Resets the styles to the default settings
    PasswordError.style.display = "none";
    PasswordInput.style.borderColor = "initial";
    PasswordInput.style.backgroundImage = "none";
  }

  // When all the conditins have passed, this function displays
  alert(
    `Hello ${LastName} ${FirstName}, your form has been sent to Fiyin's Database 😊`
  );
};

FormBtn.addEventListener("click", Validate);
