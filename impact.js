// Initialize Chart
let impactChart;

document.addEventListener("DOMContentLoaded", () => {
  initializeChart();
  loadUserImpact();
});

function initializeChart() {
  const ctx = document.getElementById("impactChart").getContext("2d");
  impactChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Cups Saved",
          data: [],
          borderColor: "#059669",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Handle Form Submission
document.getElementById("usageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const date = document.getElementById("date").value;
  const cups = parseInt(document.getElementById("cups").value);

  saveUsage(date, cups);
  updateImpactStats();
});

// Save Usage Data
function saveUsage(date, cups) {
  const usage = JSON.parse(localStorage.getItem("usage") || "[]");
  usage.push({ date, cups });
  localStorage.setItem("usage", JSON.stringify(usage));

  updateChart();
}

// Update Chart
function updateChart() {
  const usage = JSON.parse(localStorage.getItem("usage") || "[]");
  const sortedUsage = usage.sort((a, b) => new Date(a.date) - new Date(b.date));

  impactChart.data.labels = sortedUsage.map((u) => u.date);
  impactChart.data.datasets[0].data = sortedUsage.map((u) => u.cups);
  impactChart.update();
}

// Update Impact Stats
function updateImpactStats() {
  const usage = JSON.parse(localStorage.getItem("usage") || "[]");
  const totalCups = usage.reduce((sum, u) => sum + u.cups, 0);
  const co2Saved = totalCups * 0.0325; // Approximate CO2 savings per cup in kg

  document.getElementById("totalCups").textContent = totalCups;
  document.getElementById("totalCO2").textContent = co2Saved.toFixed(2);
}

// Load User Impact
function loadUserImpact() {
  updateChart();
  updateImpactStats();
}

// impact.js

document
  .getElementById("usageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const cupsUsed = parseInt(document.getElementById("cups").value);
    const date = document.getElementById("date").value;

    // Update impact numbers
    const totalCups = document.getElementById("totalCups");
    const totalCO2 = document.getElementById("totalCO2");
    totalCups.textContent = cupsUsed;
    totalCO2.textContent = (cupsUsed * 0.025).toFixed(2); // Example conversion from cups to CO2 saved

    // Update progress
    const progress = document.getElementById("progress");
    const progressValue = (cupsUsed / 100) * 100;
    progress.value = progressValue;

    // Display personalized feedback
    document.getElementById(
      "congratulations"
    ).textContent = `Congrats! You've saved ${cupsUsed} cups today!`;
    document.getElementById(
      "recommendation"
    ).textContent = `Keep going! You are on track to meet your goal of reducing paper waste.`;

    // Update the chart (example using bar chart)
    updateChart(cupsUsed);
  });

// Get the form and elements to display the message
const form = document.getElementById("userQuestions");
const usageFrequency = document.getElementById("usageFrequency");
const impactGoal = document.getElementById("impactGoal");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user input values
  const userUsageFrequency = usageFrequency.value;
  const userImpactGoal = impactGoal.value;

  // Show a friendly thank you message
  const thankYouMessage = `
        <section class="thank-you-message">
            <h2>Thank You So Much for Your Input!</h2>
            <p>We are absolutely thrilled to hear from you! Your answers are going to help us make a big difference. We can already feel the positive energy you're contributing toward reducing paper cup usage!</p>
            
            <p>By telling us how often you use reusable cups and sharing your sustainability goal, you are taking a crucial step in promoting a greener, more sustainable future. Every small action counts, and together, we can achieve something incredible! Whether you're using reusable cups daily or just occasionally, your effort is making a real impact. 😊</p>
            
            <p>At the heart of our website is a simple, yet powerful mission: to unite individuals, businesses, and organizations in the collective goal of reducing single-use paper cup consumption. We believe that small changes, like switching to a reusable cup, can have a big ripple effect across communities and the planet. 🌍</p>
            
            <p>So, thank you for being a part of this movement! We are here to support you in your sustainability journey, and we can’t wait to see the difference your efforts will make. Together, we’re not just reducing waste; we’re building a community of change-makers who are passionate about protecting our environment. Keep up the great work!</p>
            
            <p>If you ever want to share more of your journey, join our community, or get involved in other projects, don’t hesitate to reach out. We’re in this together! 🙌</p>
        </section>
    `;

  // Append the thank you message to the body of the page
  document.body.innerHTML = thankYouMessage;
});

document
  .getElementById("userQuestions")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const frequency = document.getElementById("usageFrequency").value;
    const goal = document.getElementById("impactGoal").value;

    // Provide feedback based on user responses
    let feedbackMessage = "";
    if (frequency === "Daily") {
      feedbackMessage = "That's awesome! You're a sustainability champion!";
    } else if (frequency === "FewTimesAWeek") {
      feedbackMessage =
        "Great! Try to use reusable cups every day to maximize your impact.";
    } else {
      feedbackMessage =
        "Every little effort counts! Keep using those reusable cups!";
    }

    document.getElementById("recommendation").textContent = feedbackMessage;
  });
