// Auth Logic
const authForm = document.getElementById('auth-form');
const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const submitBtn = document.getElementById('submit-btn');
const footerText = document.getElementById('footer-text');
const footerLink = document.getElementById('footer-link');
const nameField = document.getElementById('name-field');
const mobileField = document.getElementById('mobile-field');
const idLabel = document.getElementById('id-label');
const idIcon = document.getElementById('id-icon');
const userIdInput = document.getElementById('user-id');
const userMobileInput = document.getElementById('user-mobile');
const errorBox = document.getElementById('error-box');

let currentTab = 'login';

function switchTab(tab) {
    currentTab = tab;
    const tabs = document.querySelectorAll('.auth-tab');
    errorBox.style.display = 'none';

    if (tab === 'login') {
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        authTitle.innerText = 'Welcome Back!';
        authSubtitle.innerText = 'Order your favorite meals in seconds.';
        submitBtn.innerText = 'Login';
        footerText.innerText = "Don't have an account?";
        footerLink.innerText = 'Sign Up now';
        footerLink.onclick = () => switchTab('signup');

        nameField.style.display = 'none';
        mobileField.style.display = 'none';
        idLabel.innerText = 'Email or Mobile Number';
        idIcon.className = 'fa-solid fa-envelope';
        userIdInput.placeholder = 'email@example.com or 9876543210';

        document.getElementById('user-name').required = false;
        userMobileInput.required = false;
    } else {
        tabs[1].classList.add('active');
        tabs[0].classList.remove('active');
        authTitle.innerText = 'Create Account';
        authSubtitle.innerText = 'Join us for a premium dining experience.';
        submitBtn.innerText = 'Sign Up';
        footerText.innerText = "Already have an account?";
        footerLink.innerText = 'Login instead';
        footerLink.onclick = () => switchTab('login');

        nameField.style.display = 'block';
        mobileField.style.display = 'block';
        idLabel.innerText = 'Email Address';
        idIcon.className = 'fa-solid fa-envelope';
        userIdInput.placeholder = 'email@example.com';

        document.getElementById('user-name').required = true;
        userMobileInput.required = true;
    }
}

authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = userIdInput.value.trim();
    const userPass = document.getElementById('user-password').value;
    const userName = document.getElementById('user-name').value.trim();
    const userMobile = userMobileInput.value.trim();

    errorBox.style.display = 'none';

    if (currentTab === 'signup') {
        // 1. Name Validation (Text only - letters and spaces)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(userName)) {
            showError('Full Name should contain letters only.');
            return;
        }

        // 2. Mobile Validation (Exactly 10 digits)
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(userMobile)) {
            showError('Please enter a valid 10-digit mobile number.');
            return;
        }

        // 3. Email Validation (Standard format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userId)) {
            showError('Please enter a valid email address.');
            return;
        }

        // 4. Password Validation
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passRegex.test(userPass)) {
            showError('Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('gourmet_users') || '[]');

        // Check if user already exists
        if (users.find(u => u.id === userId || u.mobile === userMobile)) {
            showError('User with this email or mobile already exists.');
            return;
        }

        const newUser = {
            id: userId,
            mobile: userMobile,
            password: userPass,
            name: userName
        };

        users.push(newUser);
        localStorage.setItem('gourmet_users', JSON.stringify(users));
        localStorage.setItem('gourmet_current_user', JSON.stringify(newUser));

        // Success redirect
        redirectBack();
    } else {
        // Login logic
        const users = JSON.parse(localStorage.getItem('gourmet_users') || '[]');
        // Allow login via email or mobile
        const user = users.find(u => (u.id === userId || u.mobile === userId) && u.password === userPass);

        if (user) {
            localStorage.setItem('gourmet_current_user', JSON.stringify(user));
            redirectBack();
        } else {
            showError('Invalid credentials. Please try again.');
        }
    }
});

function showError(msg) {
    errorBox.innerText = msg;
    errorBox.style.display = 'block';
}

function redirectBack() {
    // Get redirect URL from query param or default to home
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect') || 'index.html';
    window.location.href = redirect;
}
