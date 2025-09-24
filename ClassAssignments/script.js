// Fetch JSON and display detail
async function loadDetail() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const response = await fetch("data.json");
  const data = await response.json();

  const info = data[category];

  const detailCard = document.getElementById("detail-card");
  detailCard.innerHTML = `
    <h2>${info.title}</h2>
    <p><strong>${info.description}</strong></p>
    <p>${info.details}</p>
    <button onclick="window.history.back()">Go Back</button>
  `;
}

if (window.location.pathname.includes("detail.html")) {
  loadDetail();
}
