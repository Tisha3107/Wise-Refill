// Navigation Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

// Pledge Button Handler
document
  .querySelector(".hero-buttons .btn-primary")
  ?.addEventListener("click", () => {
    if (!isLoggedIn()) {
      window.location.href = "/signup.html";
    } else {
      showPledgeModal();
    }
  });

// Auth State Check
function isLoggedIn() {
  return localStorage.getItem("user") !== null;
}

// Pledge Modal
function showPledgeModal() {
  // Implementation for pledge modal
}

// For future interactivity: animations, gamification, etc.
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
});
