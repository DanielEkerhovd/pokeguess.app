import updateStatsDisplay from './updateStatsDisplay.mjs';

export default function updatePracticeStats(correct) {
  const stats = JSON.parse(sessionStorage.getItem('stats'));

  if (correct) {
    stats.correct += 1;
    stats.total += 1;
    stats.percentage = Math.trunc((stats.correct / stats.total) * 100);
  } else {
    stats.total += 1;
    stats.percentage = Math.trunc((stats.correct / stats.total) * 100);
  }

  sessionStorage.setItem('stats', JSON.stringify(stats));
  localStorage.setItem('stats', JSON.stringify(stats));

  updateStatsDisplay();
}
