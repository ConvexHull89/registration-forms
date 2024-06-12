function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePasswordLength(password) {
    return password.length >= 8;
}

function validatePasswordUppercase(password) {
    const re = /[A-Z]/;
    return re.test(password);
}

function validatePasswordLowercase(password) {
    const re = /[a-z]/;
    return re.test(password);
}

function validatePasswordDigit(password) {
    const re = /\d/;
    return re.test(password);
}

function validatePasswordSpecialChar(password) {
    const re = /[@$!%*?&]/;
    return re.test(password);
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation
    if (!validatePasswordLength(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (!validatePasswordUppercase(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one uppercase letter';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (!validatePasswordLowercase(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one lowercase letter';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (!validatePasswordDigit(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one digit';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (!validatePasswordSpecialChar(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one special character (@$!%*?&)';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    return valid;
}

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const passwordError = document.getElementById('passwordError');

    if (!validatePasswordLength(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        passwordError.style.display = 'block';
    } else if (!validatePasswordUppercase(password)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        passwordError.style.display = 'block';
    } else if (!validatePasswordLowercase(password)) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        passwordError.style.display = 'block';
    } else if (!validatePasswordDigit(password)) {
        passwordError.textContent = 'Password must contain at least one digit';
        passwordError.style.display = 'block';
    } else if (!validatePasswordSpecialChar(password)) {
        passwordError.textContent = 'Password must contain at least one special character (@$!%*?&)';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
});
