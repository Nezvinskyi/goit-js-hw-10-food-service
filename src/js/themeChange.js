const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeSwitch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.themeSwitch.addEventListener('change', event => onThemeChange(event));

applyThemeFromStorage();

function applyThemeFromStorage() {
  switch (localStorage.getItem('theme')) {
    case 'dark':
      applyDarkTheme();
      break;

    default:
      applyLightTheme();
  }
}

function applyDarkTheme() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
}
function applyLightTheme() {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  refs.themeSwitch.checked = false;
}

function onThemeChange(event) {
  if (event.currentTarget.checked) {
    applyDarkTheme();
    localStorage.setItem('theme', 'dark');
  } else {
    applyLightTheme();
    localStorage.setItem('theme', 'light');
  }
}
