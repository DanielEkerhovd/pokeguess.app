export default function setSettings() {
  const settings = localStorage.getItem('settings');

  if (!settings) {
    localStorage.setItem(
      'settings',
      JSON.stringify({
        typingText: true,
      }),
    );
  }
}
