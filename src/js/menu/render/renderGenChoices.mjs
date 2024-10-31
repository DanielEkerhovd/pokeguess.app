export default async function renderGenChoices() {
  const generations = JSON.parse(localStorage.getItem('generations'));
  const genNumbers = generations.map((gen, index) => {
    return index + 1;
  });

  const genSetting = document.getElementById('genSelection');

  genNumbers.forEach((genNumber) => {
    const container = document.createElement('div');
    container.classList.add('flex', 'flex-row', 'items-center', 'gap-1');

    const checkBox = document.createElement('input');
    checkBox.classList.add('accent-dark-hl');
    checkBox.type = 'checkbox';
    checkBox.name = 'generation';
    checkBox.checked = true;
    checkBox.value = genNumber;
    checkBox.id = genNumber;

    const label = document.createElement('label');
    label.htmlFor = genNumber;
    label.innerText = genNumber;

    container.appendChild(checkBox);
    container.appendChild(label);

    genSetting.appendChild(container);
  });
}
