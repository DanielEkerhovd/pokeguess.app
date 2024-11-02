import selectEvent from '../select/selectEvent.mjs';
// import typesInfo from './typesInfo.mjs';
import fetchTypes from './fetchTypes.mjs';
import typingModal from './typingModal.mjs';
import createTypeElement from './createTypeElement.mjs';

export default async function renderTypes() {
  const counter = 0;
  sessionStorage.setItem('counter', counter);

  const fetchedTypes = await fetchTypes();
  const types = fetchedTypes.types;

  const settingsTypes = JSON.parse(localStorage.getItem('settings')).typingText;

  const typesContainer = document.getElementById('typings');
  typesContainer.innerHTML = '';

  types.forEach((type) => {
    const index = types.indexOf(type);
    const typeButton = createTypeElement(type, index);
    selectEvent(typeButton);
    if (settingsTypes) {
      typingModal(typeButton);
    }
    typesContainer.appendChild(typeButton);
  });
}
