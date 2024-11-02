export default function setSettings() {
  const settings = localStorage.getItem('settings');

  if (settings === null || settings == {}) {
    localStorage.setItem(
      'settings',
      JSON.stringify({
        typingText: true,
      }),
    );
  }
}
