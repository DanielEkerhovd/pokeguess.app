export default function updateStats(stats) {
  const correct = document.getElementById('stats-correct');
  const total = document.getElementById('stats-total');
  const percentage = document.getElementById('stats-percentage');

  correct.textContent = stats.correct;
  total.textContent = stats.total;
  percentage.textContent = stats.percentage;
}
