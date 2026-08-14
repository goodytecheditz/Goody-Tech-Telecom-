// --- Navigation Logic ---
function showAuth() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'flex';
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// --- Sign Up & Login Logic ---
function handleSignUp() {
    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (name === "" || phone === "" || email === "" || password === "") {
        alert("Error: Please fill in all details!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Error: Passwords do not match!");
        return;
    }

    localStorage.setItem('gtt_email', email);
    localStorage.setItem('gtt_password', password);
    localStorage.setItem('gtt_name', name);
    localStorage.setItem('gtt_phone', phone);

    alert("Account created successfully! Please log in.");
    toggleForms();
}

function handleLogin() {
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;

    const savedEmail = localStorage.getItem('gtt_email');
    const savedPassword = localStorage.getItem('gtt_password');

    if (emailInput === savedEmail && passwordInput === savedPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect email or password.");
    }
}

// --- Dashboard Logic (Primebill Style Modals) ---
window.onload = function() {
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) {
        const savedName = localStorage.getItem('gtt_name');
        if (savedName) userNameDisplay.innerText = "Welcome, " + savedName + "!";
    }
};

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
