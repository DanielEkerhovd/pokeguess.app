import typingModal from '../../game/types/typingModal.mjs';

export default function toggleTypingsText() {
  const typings = document.querySelectorAll('#typings div');

  const typingToggle = document.getElementById('settingTypingText');

  const typingStatus = JSON.parse(localStorage.getItem('settings')).typingText;

  if (typingStatus) {
    typingToggle.checked = true;
  }

  typingToggle.addEventListener('click', () => {
    let typingSetting = JSON.parse(localStorage.getItem('settings')).typingText;

    typingSetting = !typingSetting;

    localStorage.setItem(
      'settings',
      JSON.stringify({ typingText: typingSetting }),
    );

    if (typingSetting) {
      typings.forEach((typing) => {
        typingModal(typing);
      });
    } else {
      const modals = document.querySelectorAll('[data-modal="typing"]');
      modals.forEach((modal) => {
        modal.remove();
      });
    }
  });
}
