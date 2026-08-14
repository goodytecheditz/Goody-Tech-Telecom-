// --- User Display ---
window.onload = function() {
    const userNameDisplay = document.getElementById('user-name-display');
    if (userNameDisplay) {
        const savedName = localStorage.getItem('gtt_name');
        if (savedName) userNameDisplay.innerText = savedName.split(' ')[0];
    }
};

// --- Modal Control Functions ---
function openModal(id) { 
    document.getElementById(id).style.display = 'flex'; 
}

function closeModal(id) { 
    document.getElementById(id).style.display = 'none'; 
}

// --- Network Selector in Data Modal ---
let selectedNet = "MTN";
function selectNetwork(btnElement, netName) {
    selectedNet = netName;
    const allNetBtns = document.querySelectorAll('.net-btn');
    allNetBtns.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// --- Data Purchase Demo Process ---
function processDataOrder() {
    const dataType = document.getElementById('data-type-select').value;
    alert("Insufficient Wallet Balance!\n\nAttempted Order: " + selectedNet + " (" + dataType + ")");
}

// --- WhatsApp Message Handler (Connected to Your DM) ---
function sendWhatsAppMessage() {
    const msgText = document.getElementById('wa-message-text').value;
    
    if (msgText.trim() === "") {
        alert("Please write a message before sending!");
        return;
    }

    // Your Direct WhatsApp Number
    const adminPhoneNumber = "2348136045102"; 
    
    const encodedMessage = encodeURIComponent(msgText);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp directly with pre-typed message
    window.open(whatsappUrl, '_blank');
    closeModal('whatsapp-modal');
}
