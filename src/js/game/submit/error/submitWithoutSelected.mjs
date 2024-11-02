export default function submitWithoutSelected() {
  const selections = document.getElementById('choices');

  selections.classList.remove('bg-white');
  selections.classList.add('bg-red-500', 'shake');
  setTimeout(() => {
    selections.classList.remove('bg-red-500');
    selections.classList.add('bg-white');
  }, 200);

  setTimeout(() => {
    selections.classList.remove('shake');
  }, 400);
}
