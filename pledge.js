document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pledgeModal");
  const takePledgeBtn = document.getElementById("takePledgeBtn");
  const closeModal = document.querySelector(".close");
  const pledgeForm = document.getElementById("pledgeForm");

  // Open modal when the "Take the Pledge" button is clicked
  takePledgeBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal when the "x" is clicked
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submission
  pledgeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const commitment = document.getElementById("commitment").value;

    // Display a thank-you message
    alert(
      `Thank you, ${name}, for taking the pledge!\nEmail: ${email}\nCommitment: ${commitment}`
    );
    modal.style.display = "none"; // Close modal after submission
    pledgeForm.reset(); // Clear form inputs
  });
});
