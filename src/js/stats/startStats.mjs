import updateStats from './updateStats.mjs';

export default function startStats() {
  const fetchHistory = JSON.parse(localStorage.getItem('stats'));

  if (fetchHistory !== 'undefined') {
    updateStats(fetchHistory);
    localStorage.setItem('stats', JSON.stringify(fetchHistory));
  } else {
    const history = {
      correct: 0,
      total: 0,
      percentage: 0,
    };

    updateStats(history);

    const historyString = JSON.stringify(history);
    sessionStorage.setItem('stats', historyString);
    localStorage.setItem('stats', historyString);
  }
}
