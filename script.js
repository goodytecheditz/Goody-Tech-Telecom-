function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm && registerForm) {
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    }
}

function login() {
    window.location.href = "dashboard.html";
}

function register() {
    alert("Account created! Redirecting to Dashboard...");
    window.location.href = "dashboard.html";
}
