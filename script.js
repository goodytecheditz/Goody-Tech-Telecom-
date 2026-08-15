// --- User Display on Dashboard ---
window.onload = function() {
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) {
        const savedName = localStorage.getItem('gtt_name');
        if (savedName) userNameDisplay.innerText = savedName.split(' ')[0];
    }
};

// --- Custom In-App Popup Notice (replaces native alert) ---
function showNotice(title, message) {
    const titleEl = document.getElementById('notice-title');
    const msgEl = document.getElementById('notice-msg');
    
    if (titleEl && msgEl) {
        titleEl.innerText = title;
        msgEl.innerText = message;
        openModal('notice-modal');
    }
}

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

// --- Login & Register Validation ---
function handleLogin() {
    const user = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim();
    const errorEl = document.getElementById('login-error');

    if (!user || !pass) {
        errorEl.innerText = "Please enter both your email/phone and password.";
        return;
    }

    localStorage.setItem('gtt_name', user);
    window.location.href = 'dashboard.html';
}

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
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex'; 
}

function closeModal(id) { 
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none'; 
}

// --- Network Selection ---
let selectedNet = "MTN";
function selectNetwork(btnElement, netName) {
    selectedNet = netName;
    const allNetBtns = document.querySelectorAll('.net-btn');
    allNetBtns.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// --- Order Actions (Custom Dark Popups instead of Browser Alerts) ---
function processDataOrder() {
    closeModal('data-modal');
    showNotice("Insufficient Balance", "Insufficient wallet balance to complete this data purchase. Please fund your wallet.");
}

function processAirtimeOrder() {
    closeModal('airtime-modal');
    showNotice("Insufficient Balance", "Insufficient wallet balance to purchase airtime. Please fund your wallet.");
}

// --- WhatsApp Direct DM ---
function sendWhatsAppMessage() {
    const msgInput = document.getElementById('wa-message-text');
    const msgText = msgInput ? msgInput.value.trim() : "";
    const errorEl = document.getElementById('wa-error');

    if (msgText === "") {
        if (errorEl) errorEl.innerText = "Please write a message before sending!";
        return;
    }

    if (errorEl) errorEl.innerText = "";
    const adminPhoneNumber = "2348136045102"; 
    const encodedMessage = encodeURIComponent(msgText);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal('whatsapp-modal');
}function sendWhatsAppMessage() {
    const msgInput = document.getElementById('wa-message-text');
    const msgText = msgInput ? msgInput.value.trim() : "";
    const errorEl = document.getElementById('wa-error');

    if (msgText === "") {
        if (errorEl) errorEl.innerText = "Please write a message before sending!";
        return;
    }

    if (errorEl) errorEl.innerText = "";
    const adminPhoneNumber = "2348136045102"; 
    const encodedMessage = encodeURIComponent(msgText);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal('whatsapp-modal');
}
