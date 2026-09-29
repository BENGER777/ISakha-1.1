// ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ =====
// По умолчанию — СВЕТЛАЯ тема
(function() {
  const savedTheme = localStorage.getItem('isakha_theme') || 'light';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
  }
})();

window.toggleTheme = function() {
  const html = document.documentElement;
  const isLight = html.classList.contains('light-theme');

  if (isLight) {
    html.classList.remove('light-theme');
    localStorage.setItem('isakha_theme', 'dark');
  } else {
    html.classList.add('light-theme');
    localStorage.setItem('isakha_theme', 'light');
  }

  updateThemeIcon();
};

function updateThemeIcon() {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;

  const isLight = document.documentElement.classList.contains('light-theme');

  if (isLight) {
    // Светлая тема — показываем ЛУНУ (нажми → станет тёмной)
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  } else {
    // Тёмная тема — показываем СОЛНЦЕ (нажми → станет светлой)
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  }
}

document.addEventListener('DOMContentLoaded', updateThemeIcon);
