// auth.js

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust if needed
let currentUser = null;
let isSignUpMode = false;
let selectedUserType = 'reader';

// ----------------- AUTHENTICATION FUNCTIONS -----------------

// Login function using backend API with JWT
async function login(email, password) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    currentUser = data.user;
    localStorage.setItem("bookverse_user", JSON.stringify(currentUser));
    updateUIForUser();
    return data;
}

// Signup function
async function signup(name, email, password, type) {
    const res = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, type })
    });

    if (!res.ok) throw new Error("Signup failed");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    currentUser = data.user;
    localStorage.setItem("bookverse_user", JSON.stringify(currentUser));
    updateUIForUser();
    return data;
}

// ----------------- MODAL & FORM UI -----------------

function showAuth() {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('active');
    updateAuthForm();
}

function closeAuth() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('active');
    resetAuthForm();
}

function toggleAuthMode() {
    isSignUpMode = !isSignUpMode;
    updateAuthForm();
}

function updateAuthForm() {
    const title = document.getElementById('auth-title');
    const nameGroup = document.getElementById('name-group');
    const userTypeSelection = document.getElementById('user-type-selection');
    const submitBtn = document.getElementById('submit-btn');
    const switchBtn = document.getElementById('auth-switch-btn');

    if (isSignUpMode) {
        title.textContent = 'Join BookVerse';
        nameGroup.style.display = 'block';
        userTypeSelection.style.display = 'block';
        submitBtn.textContent = 'Create Account';
        switchBtn.textContent = 'Already have an account? Sign in';
    } else {
        title.textContent = 'Welcome Back';
        nameGroup.style.display = 'none';
        userTypeSelection.style.display = 'none';
        submitBtn.textContent = 'Sign In';
        switchBtn.textContent = "Don't have an account? Sign up";
    }
}

function resetAuthForm() {
    document.getElementById('auth-form').reset();
    isSignUpMode = false;
    selectedUserType = 'reader';
    updateUserTypeButtons();
}

function updateUserTypeButtons() {
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === selectedUserType) {
            btn.classList.add('active');
        }
    });
}

// ----------------- EVENT LISTENERS -----------------

// User type selection
document.addEventListener('click', function(e) {
    if (e.target.closest('.type-btn')) {
        const btn = e.target.closest('.type-btn');
        selectedUserType = btn.dataset.type;
        updateUserTypeButtons();
    }
});

// Auth form submission
document.getElementById('auth-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value || 'User';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        if (isSignUpMode) {
            await signup(name, email, password, selectedUserType);
            showNotification(`Account created successfully! Welcome, ${currentUser.name}`);
        } else {
            await login(email, password);
            showNotification(`Welcome back, ${currentUser.name}!`);
        }
        closeAuth();
    } catch (err) {
        showNotification(err.message);
        console.error(err);
    }
});

// ----------------- UI UPDATE & LOGOUT -----------------

function updateUIForUser() {
    const signInBtn = document.getElementById('sign-in-btn');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const writerBtn = document.getElementById('writer-btn');
    const writerWelcome = document.getElementById('writer-welcome');

    if (currentUser) {
        signInBtn.style.display = 'none';
        userInfo.style.display = 'flex';
        userName.textContent = currentUser.name;

        if (currentUser.type === 'writer') {
            writerBtn.style.display = 'flex';
            writerWelcome.textContent = `Welcome back, ${currentUser.name}! Ready to share your next story?`;
        } else {
            writerBtn.style.display = 'none';
        }
    } else {
        signInBtn.style.display = 'block';
        userInfo.style.display = 'none';
        writerBtn.style.display = 'none';
    }

    if (typeof updateWriterStats === 'function') {
        updateWriterStats();
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('bookverse_user');
    updateUIForUser();
    showHome();
    showNotification('You have been signed out successfully.');
}

// ----------------- NOTIFICATIONS -----------------

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1100;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ----------------- INITIALIZE -----------------

// Load user from localStorage on startup
(function initAuth() {
    const storedUser = localStorage.getItem('bookverse_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateUIForUser();
    }
})();
