function showInfoModal(type) {
  const modal = document.getElementById("infoModal");
  const modalContent = document.getElementById("modalContent");

  let content = "";
  switch (type) {
    case "health":
      content =
        "<h2>Health Risks</h2><p>Paper cups may leach harmful chemicals like BPA...</p>";
      break;
    case "environment":
      content =
        "<h2>Environmental Impact</h2><p>Millions of trees are cut for paper cups...</p>";
      break;
    case "sustainability":
      content = "<h2>Sustainability Tips</h2><p>Switch to reusable cups...</p>";
      break;
  }
  modalContent.innerHTML = content;
  modal.style.display = "block";
}

function closeInfoModal() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "none";
}

function checkAnswers() {
  const feedback = document.getElementById("quiz-feedback");
  feedback.textContent = "Great job! You’re making a difference.";
}

document.querySelector(".quiz-submit").addEventListener("click", () => {
  const questions = document.querySelectorAll(".quiz-question");
  let score = 0;

  // Loop through all questions
  questions.forEach((question, index) => {
    const selectedOption = question.querySelector(
      'input[type="radio"]:checked'
    );
    if (selectedOption && selectedOption.value === "1") {
      score++; // Add 1 to the score for each correct answer
    }
  });

  // Display score
  const scoreDisplay = document.querySelector(".quiz-score");
  scoreDisplay.textContent = `Your score is: ${score} out of ${questions.length}`;
  scoreDisplay.style.fontSize = "18px";
  scoreDisplay.style.fontWeight = "bold";
  scoreDisplay.style.color = score > 5 ? "green" : "red"; // Dynamic color based on performance
});
