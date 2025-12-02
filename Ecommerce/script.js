// ======== MODAL CONTROL ========
function openModal(type) {
  const modal = document.getElementById("authModal");
  const login = document.getElementById("loginForm");
  const register = document.getElementById("registerForm");

  modal.classList.remove("hidden");

  if (type === "login") {
    login.classList.remove("hidden");
    register.classList.add("hidden");
  } else {
    register.classList.remove("hidden");
    login.classList.add("hidden");
  }
}

function closeModal() {
  document.getElementById("authModal").classList.add("hidden");
}

function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
}

function showRegister() {
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

// ======== CART LOGIC ========
let cartCount = 3;
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function () {
    const product = this.getAttribute("data-product");
    cartCount++;
    document.querySelector(".cart-count").textContent = cartCount;
    alert(`${product} added to cart!`);
  });
});

// ======== FILTER FORM (stub) ========
const filterForm = document.querySelector(".sidebar form");
if (filterForm) {
  filterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Filters will be applied here.");
  });
}

// ======== LOGIN FORM VALIDATION ========
document.querySelector("#loginForm form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value.trim();
  const password = this.querySelector('input[type="password"]').value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert("Login successful!");
  closeModal();
});

// ======== REGISTRATION FORM VALIDATION ========
document.querySelector("#registerForm form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const password = this.querySelectorAll('input[type="password"]')[0].value;
  const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;

  if (name.length < 2) {
    alert("Please enter a valid name.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registration successful!");
  closeModal();
});

// ======== CHECKOUT FORM VALIDATION ========
const checkoutForm = document.querySelector("#checkout form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = this.querySelectorAll("input");
    const cardNumber = fields[1].value.replace(/\s+/g, "");
    const expiry = fields[2].value.trim();
    const cvv = fields[3].value.trim();

    if (fields[0].value.trim().length < 2) {
      alert("Enter a valid full name.");
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Enter a valid 16-digit card number.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert("Enter expiry in MM/YY format.");
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert("Enter a valid 3-digit CVV.");
      return;
    }

    alert("Payment processed successfully!");
  });
}

// ======== EMAIL VALIDATION UTIL ========
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
