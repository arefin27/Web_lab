function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const error = document.getElementById("error");

    // Reset error message
    error.textContent = "";

    // Username must be all lowercase
    const usernameRegex = /^[a-z]+$/;
    if (!usernameRegex.test(username)) {
        error.textContent = "Username must contain only lowercase letters.";
        return false;
    }

    // Password validation: at least 1 digit, 1 uppercase, 1 special char
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        error.textContent = "Password must contain 1 uppercase letter, 1 digit, and 1 special character.";
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return false;
    }

    // Email must contain @ and end with .com
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (!emailRegex.test(email)) {
        error.textContent = "Email must contain @ and end with .com.";
        return false;
    }

    // Phone must be exactly 12 digits
    const phoneRegex = /^\d{12}$/;
    if (!phoneRegex.test(phone)) {
        error.textContent = "Phone number must be exactly 12 digits.";
        return false;
    }

    // If all checks pass
    alert("Form submitted successfully!");
    return true;
}
