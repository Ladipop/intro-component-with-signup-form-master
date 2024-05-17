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
  let FirstName = FirstNameInput.value;

  // First Name
  if (!FirstName) {
    FirstNameError.textContent = "Fill in Your First Name";
    FirstNameError.style.color = "Red";
    FirstNameError.style.fontSize = "0.6rem";
    FirstNameInput.style.borderColor = "Red";
    FirstNameInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else {
    FirstNameError.style.display = "none";
    FirstNameInput.style.borderColor = "initial";
    FirstNameInput.style.backgroundImage = "none";
  }

  // Last Name
  let LastName = LastNameInput.value;
  if (!LastName) {
    LastNameError.textContent = "Fill in Your Last Name";
    LastNameError.style.color = "Red";
    LastNameError.style.fontSize = "0.6rem";
    LastNameInput.style.borderColor = "Red";
    LastNameError.style.display = "block";
    LastNameInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else {
    LastNameInput.style.borderColor = "initial";
    LastNameError.style.display = "none";
    LastNameInput.style.backgroundImage = "none";
  }

  // Email
  let Email = EmailInput.value.trim();
  if (Email == "") {
    EmailInput.style.borderColor = "Red";
    EmailError.textContent = "Put in your Email";
    EmailError.style.color = "Red";
    EmailError.style.fontSize = "0.6rem";
    EmailInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else if (!EmailRegex.test(Email)) {
    EmailInput.style.borderColor = "Red";
    EmailError.textContent = "Wrong Email format!";
    EmailError.style.color = "Red";
    EmailError.style.fontSize = "0.6rem";
    EmailInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else {
    EmailInput.style.borderColor = "initial";
    EmailError.textContent = "";
    EmailInput.style.backgroundImage = "none";
  }

  // Password
  let Password = PasswordInput.value;
  if (Password == "") {
    PasswordError.textContent = " Fill in Your password";
    PasswordError.style.color = "Red";
    PasswordError.style.fontSize = "0.6rem";
    PasswordInput.style.borderColor = "Red";
    PasswordInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else if (Password.length < 6) {
    PasswordError.textContent = "Your password is too short!";
    PasswordError.style.color = "Red";
    PasswordError.style.fontSize = "0.6rem";
    PasswordInput.style.borderColor = "Red";
    PasswordInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else if (Password.length > 20) {
    PasswordError.textContent = "Your password is too long";
    PasswordError.style.color = "Red";
    PasswordError.style.fontSize = "0.6rem";
    PasswordInput.style.borderColor = "Red";
    PasswordInput.style.backgroundImage = "url(images/icon-error.svg)";
    return;
  } else {
    PasswordError.style.display = "none";
    PasswordInput.style.borderColor = "initial";
    PasswordInput.style.backgroundImage = "none";
  }

  alert("Your stuff has been submitted");
};

let onInputChange = () => {
  Validate({
    preventDefault: () => {},
  });
};

FormBtn.addEventListener("click", Validate);
