/* =========================================
   GOODY TECH TELECOM
   MAIN JAVASCRIPT
   Frontend demo — Backend/API later
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.toggle("active");
  }
}


/* =========================================
   LOGIN / REGISTER
========================================= */

function openLogin() {
  const overlay = document.getElementById("authOverlay");

  if (overlay) {
    overlay.classList.add("active");
    showLogin();
  }
}


function openRegister() {
  const overlay = document.getElementById("authOverlay");

  if (overlay) {
    overlay.classList.add("active");
    showRegister();
  }
}


function closeAuth() {
  const overlay = document.getElementById("authOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }
}


function showLogin() {
  const login = document.getElementById("loginForm");
  const register = document.getElementById("registerForm");

  if (login) {
    login.style.display = "block";
  }

  if (register) {
    register.style.display = "none";
  }
}


function showRegister() {
  const login = document.getElementById("loginForm");
  const register = document.getElementById("registerForm");

  if (login) {
    login.style.display = "none";
  }

  if (register) {
    register.style.display = "block";
  }
}


/* =========================================
   PASSWORD VISIBILITY
========================================= */

function togglePassword(id) {
  const input = document.getElementById(id);

  if (!input) {
    return;
  }

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}


/* =========================================
   DEMO LOGIN
========================================= */

function demoLogin() {

  const identityElement =
    document.getElementById("loginIdentity");

  const passwordElement =
    document.getElementById("loginPassword");

  const identity =
    identityElement ? identityElement.value.trim() : "";

  const password =
    passwordElement ? passwordElement.value : "";


  if (!identity || !password) {

    alert(
      "Please enter your email/phone number and password."
    );

    return;
  }


  alert(
    "Login is currently a frontend demo. " +
    "Real authentication will be connected to the backend/API later."
  );
}


/* =========================================
   DEMO REGISTRATION
========================================= */

function demoRegister() {

  const nameElement =
    document.getElementById("registerName");

  const emailElement =
    document.getElementById("registerEmail");

  const phoneElement =
    document.getElementById("registerPhone");

  const passwordElement =
    document.getElementById("registerPassword");

  const confirmElement =
    document.getElementById("confirmPassword");


  const name =
    nameElement ? nameElement.value.trim() : "";

  const email =
    emailElement ? emailElement.value.trim() : "";

  const phone =
    phoneElement ? phoneElement.value.trim() : "";

  const password =
    passwordElement ? passwordElement.value : "";

  const confirm =
    confirmElement ? confirmElement.value : "";


  if (
    !name ||
    !email ||
    !phone ||
    !password ||
    !confirm
  ) {

    alert("Please fill in all fields.");

    return;
  }


  if (password !== confirm) {

    alert("Passwords do not match.");

    return;
  }


  alert(
    "Registration is currently a frontend demo. " +
    "Real account creation will be connected to the backend/API later."
  );
}


/* =========================================
   REFERRAL DEMO
========================================= */

function demoReferral() {

  alert(
    "Your referral link will be generated automatically " +
    "after the account and referral system are connected."
  );
}


/* =========================================
   CLOSE LOGIN/REGISTER WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function(event) {

  const overlay =
    document.getElementById("authOverlay");

  if (
    overlay &&
    event.target === overlay
  ) {
    closeAuth();
  }

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
