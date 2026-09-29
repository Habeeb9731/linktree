const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('abdul-theme');

const translations = {
  en: {
    profileRole: 'Data Science & Full-Stack Developer',
    profileTagline: 'Building thoughtful digital experiences',
    website: 'My website',
    cv: 'Curriculum vitae',
    cvDetail: 'Experience, skills & education',
    linkedinDetail: 'Let’s connect professionally',
    githubDetail: 'See what I’m building',
    email: 'Email me',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    description: 'Abdul Habeeb - Data Science and Full-Stack Developer'
  },
  de: {
    profileRole: 'Data Science & Full-Stack Developer',
    profileTagline: 'Durchdachte digitale Erlebnisse entwickeln',
    website: 'Meine Website',
    cv: 'Lebenslauf',
    cvDetail: 'Erfahrung, Fähigkeiten & Ausbildung',
    linkedinDetail: 'Lass uns beruflich vernetzen',
    githubDetail: 'Meine Projekte entdecken',
    email: 'E-Mail schreiben',
    themeLight: 'Helles Design aktivieren',
    themeDark: 'Dunkles Design aktivieren',
    description: 'Abdul Habeeb - Data Science und Full-Stack-Entwickler'
  }
};

const locale = (navigator.languages || [navigator.language || 'en'])
  .some((language) => language.toLowerCase().startsWith('de')) ? 'de' : 'en';
const copy = translations[locale];

document.documentElement.lang = locale;
document.querySelector('meta[name="description"]').setAttribute('content', copy.description);
document.querySelectorAll('[data-i18n]').forEach((element) => {
  element.textContent = copy[element.dataset.i18n];
});

if (savedTheme === 'light') document.body.classList.add('light');

function updateThemeButton() {
  const light = document.body.classList.contains('light');
  themeIcon.textContent = light ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', light ? copy.themeDark : copy.themeLight);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('abdul-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  updateThemeButton();
});

document.querySelector('#year').textContent = new Date().getFullYear();
updateThemeButton();
