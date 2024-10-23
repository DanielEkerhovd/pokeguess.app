import updateStatsDisplay from './updateStatsDisplay.mjs';

export default function startStats() {
  const fetchHistory = JSON.parse(localStorage.getItem('stats'));

  if (fetchHistory) {
    sessionStorage.setItem('stats', JSON.stringify(fetchHistory));
    updateStatsDisplay();
  } else {
    const history = {
      correct: 0,
      total: 0,
      percentage: 0,
    };

    const historyString = JSON.stringify(history);
    sessionStorage.setItem('stats', historyString);
    localStorage.setItem('stats', historyString);

    updateStatsDisplay();
  }
}
