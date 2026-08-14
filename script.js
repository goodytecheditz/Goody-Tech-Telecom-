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

// --- Sign Up & Login Logic (Real App Restrictions) ---
function handleSignUp() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (name === "" || email === "" || password === "") {
        alert("Error: Please fill in all details to create an account!");
        return;
    }

    localStorage.setItem('gtt_email', email);
    localStorage.setItem('gtt_password', password);
    localStorage.setItem('gtt_name', name);

    alert("Account created successfully! Please log in.");
    document.getElementById('reg-name').value = "";
    document.getElementById('reg-email').value = "";
    document.getElementById('reg-password').value = "";
    toggleForms();
}

function handleLogin() {
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;

    if (emailInput === "" || passwordInput === "") {
        alert("Error: Please enter both your email and password.");
        return;
    }

    const savedEmail = localStorage.getItem('gtt_email');
    const savedPassword = localStorage.getItem('gtt_password');

    if (emailInput === savedEmail && passwordInput === savedPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect email or password. Please try again or create an account first.");
    }
}

// --- Dashboard Logic ---
window.onload = function() {
    // This greets the user by the name they signed up with!
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) {
        const savedName = localStorage.getItem('gtt_name');
        if (savedName) {
            userNameDisplay.innerText = "Welcome, " + savedName + "!";
        }
    }
};

function serviceClicked(serviceName) {
    alert(serviceName + " form will open here. (API connection pending in Phase 2)");
}
