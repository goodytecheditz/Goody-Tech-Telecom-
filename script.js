// --- User Display on Dashboard ---
window.onload = function() {
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) {
        const savedName = localStorage.getItem('gtt_name');
        if (savedName) userNameDisplay.innerText = savedName.split(' ')[0];
    }
};

// --- Page & Form Switching ---
function showAuth(type) {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'flex';
    switchForm(type);
}

function showLanding() {
    document.getElementById('welcome-section').style.display = 'block';
    document.getElementById('auth-section').style.display = 'none';
}

function switchForm(type) {
    clearErrors();
    if (type === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    } else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    }
}

function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');
}

// --- Login Validation (Requires Username & Password) ---
function handleLogin() {
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim();
    const errorEl = document.getElementById('login-error');

    if (!user || !pass) {
        errorEl.innerText = "Please enter both your email/phone and password.";
        return;
    }

    // Save user reference and enter dashboard
    localStorage.setItem('gtt_name', user);
    window.location.href = 'dashboard.html';
}

// --- Register Validation ---
function handleRegister() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    const errorEl = document.getElementById('reg-error');

    if (!name || !email || !phone || !pass) {
        errorEl.innerText = "Please fill in all details to create an account.";
        return;
    }

    localStorage.setItem('gtt_name', name);
    window.location.href = 'dashboard.html';
}

// --- Modal Control ---
function openModal(id) { 
    document.getElementById(id).style.display = 'flex'; 
}

function closeModal(id) { 
    document.getElementById(id).style.display = 'none'; 
}

// --- Direct WhatsApp Support (No Browser Alerts!) ---
function sendWhatsAppMessage() {
    const msgText = document.getElementById('wa-message-text').value.trim();
    const errorEl = document.getElementById('wa-error');

    if (msgText === "") {
        errorEl.innerText = "Please write a message before sending!";
        return;
    }

    errorEl.innerText = "";
    const adminPhoneNumber = "2348136045102"; 
    const encodedMessage = encodeURIComponent(msgText);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal('whatsapp-modal');
}
