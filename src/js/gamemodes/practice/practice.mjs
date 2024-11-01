import startGame from '../../game/startGame.mjs';
import stats from './stats/practiceStats.mjs';

export default function startPractice(firstPokemon) {
  const gamemode = 'practice';
  startGame(gamemode, firstPokemon);
  stats();
}
