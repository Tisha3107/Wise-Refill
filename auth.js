// Handle Login Form
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const success = await login(email, password);
    if (success) {
      window.location.href = "/";
    }
  } catch (error) {
    showError(error.message);
  }
});

// Login Function
async function login(email, password) {
  // Implementation for authentication
  // Replace with actual API calls
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email }));
      resolve(true);
    }, 1000);
  });
}

// Social Login
function socialLogin(provider) {
  // Implementation for social login
  console.log(`Logging in with ${provider}`);
}

// Show Error
function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;

  const form = document.getElementById("loginForm");
  form.insertBefore(errorDiv, form.firstChild);

  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}
