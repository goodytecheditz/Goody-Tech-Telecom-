/* =========================================
   GOODY TECH TELECOM
   MAIN JAVASCRIPT
   Frontend demo — backend/API later
   ========================================= */

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.toggle("active");
  }
}


/* ==============================
   AUTHENTICATION UI
   ============================== */

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


/* ==============================
   PASSWORD VISIBILITY
   ============================== */

function togglePassword(id) {
  const input = document.getElementById(id);

  if (!input) {
    return;
  }

  input.type =
    input.type === "password"
      ? "text"
      : "password";
}


/* ==============================
   FRONTEND DEMO LOGIN
   ============================== */

function demoLogin() {
  const identity =
    document.getElementById("loginIdentity")?.value.trim();

  const password =
    document.getElementById("loginPassword")?.value;

  if (!identity || !password) {
    alert("Please enter your email/phone and password.");
    return;
  }

  alert(
    "Login is currently a frontend demo. Real authentication will be connected to the backend/API later."
  );
}


/* ==============================
   FRONTEND DEMO REGISTER
   ============================== */

function demoRegister() {
  const name =
    document.getElementById("registerName")?.value.trim();

  const email =
    document.getElementById("registerEmail")?.value.trim();

  const phone =
    document.getElementById("registerPhone")?.value.trim();

  const password =
    document.getElementById("registerPassword")?.value;

  const confirm =
    document.getElementById("confirmPassword")?.value;

  if (!name || !email || !phone || !password || !confirm) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  alert(
    "Registration is currently a frontend demo. Real account creation will be connected to the backend/API later."
  );
}


/* ==============================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE THE AUTH BOX
   ============================== */

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


/* ==============================
   CURRENT YEAR
   ============================== */

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}
