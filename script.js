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

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
}

function handleSignUp() {
    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (!name || !phone || !email || !password) {
        alert("Please fill in all required fields!");
        return;
    }

    localStorage.setItem('gtt_email', email);
    localStorage.setItem('gtt_password', password);
    localStorage.setItem('gtt_name', name);

    alert("Account created successfully!");
    toggleForms();
}

function handleLogin() {
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;

    const savedEmail = localStorage.getItem('gtt_email');
    const savedPassword = localStorage.getItem('gtt_password');

    if (emailInput && passwordInput && (emailInput === savedEmail || emailInput === "demo") && passwordInput === savedPassword) {
        window.location.href = "dashboard.html";
    } else if (emailInput === "" || passwordInput === "") {
        alert("Please enter your email/phone and password.");
    } else {
        window.location.href = "dashboard.html"; // Allows direct entry for testing
    }
}

window.onload = function() {
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) {
        const savedName = localStorage.getItem('gtt_name');
        if (savedName) userNameDisplay.innerText = savedName.split(' ')[0];
    }
};

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function selectDataType(type) {
    alert("You selected: " + type);
    closeModal('data-type-modal');
}
