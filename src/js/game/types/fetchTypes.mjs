export default async function fetchTypings() {
  try {
    const response = await fetch('/types.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
