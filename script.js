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

function switchForm(type) {
    if (type === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    } else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    }
}

// --- Navigation to Dashboard ---
function handleLogin() {
    window.location.href = 'dashboard.html';
}

function handleRegister() {
    const name = document.getElementById('reg-name').value;
    if (name) localStorage.setItem('gtt_name', name);
    window.location.href = 'dashboard.html';
}

// --- Modal Control ---
function openModal(id) { 
    document.getElementById(id).style.display = 'flex'; 
}

function closeModal(id) { 
    document.getElementById(id).style.display = 'none'; 
}

// --- Network Selection ---
let selectedNet = "MTN";
function selectNetwork(btnElement, netName) {
    selectedNet = netName;
    const allNetBtns = document.querySelectorAll('.net-btn');
    allNetBtns.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

function processDataOrder() {
    const dataType = document.getElementById('data-type-select').value;
    alert("Insufficient Wallet Balance!\n\nAttempted Order: " + selectedNet + " (" + dataType + ")");
}

// --- Direct WhatsApp DM ---
function sendWhatsAppMessage() {
    const msgText = document.getElementById('wa-message-text').value;
    
    if (msgText.trim() === "") {
        alert("Please write a message before sending!");
        return;
    }

    const adminPhoneNumber = "2348136045102"; 
    const encodedMessage = encodeURIComponent(msgText);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal('whatsapp-modal');
}
