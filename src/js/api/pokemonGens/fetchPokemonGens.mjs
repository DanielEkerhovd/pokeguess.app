import { API_GENERATIONS } from '../tools/keys.mjs';

export default async function renderGenChoices() {
  try {
    const response = await fetch(API_GENERATIONS);
    const data = await response.json();
    const generations = data.results;

    localStorage.setItem('generations', JSON.stringify(generations));
  } catch {
    console.error('Failed to fetch Pokémon generations');
  }
}
