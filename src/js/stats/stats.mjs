import startStats from './startStats.mjs';

export default function stats() {
  startStats();

  console.log(JSON.parse(sessionStorage.getItem('stats')));
}
