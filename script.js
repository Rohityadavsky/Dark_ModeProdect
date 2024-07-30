const toggleSwitch = document.querySelector('input[type="checkbox"]');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(LIGHT_THEME);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

