// Sample leaderboard data (replace with actual API calls)
const leaderboardData = {
  weekly: [
    {
      rank: 1,
      user: "EcoWarrior",
      cupsSaved: 42,
      points: 840,
      badges: ["🌟", "🌱"],
    },
    { rank: 2, user: "GreenHero", cupsSaved: 38, points: 760, badges: ["🌱"] },
    // Add more entries...
  ],
  monthly: [
    {
      rank: 1,
      user: "EarthSaver",
      cupsSaved: 156,
      points: 3120,
      badges: ["🌟", "🌱", "🏆"],
    },
    // Add more entries...
  ],
  alltime: [
    {
      rank: 1,
      user: "PlanetProtector",
      cupsSaved: 1247,
      points: 24940,
      badges: ["👑", "🌟", "🌱", "🏆"],
    },
    // Add more entries...
  ],
};

// Initialize Leaderboard
document.addEventListener("DOMContentLoaded", () => {
  updateLeaderboard("weekly");

  // Filter buttons
  document.querySelectorAll(".leaderboard-filters button").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelector(".leaderboard-filters .active")
        .classList.remove("active");
      button.classList.add("active");
      updateLeaderboard(button.dataset.filter);
    });
  });
});

// Update Leaderboard
function updateLeaderboard(timeframe) {
  const tbody = document.getElementById("leaderboardBody");
  tbody.innerHTML = "";

  leaderboardData[timeframe].forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.user}</td>
            <td>${entry.cupsSaved}</td>
            <td>${entry.points}</td>
            <td>${entry.badges.join(" ")}</td>
        `;
    tbody.appendChild(row);
  });
}
