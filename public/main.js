const changeLanguage = (lang) => {
  locale.value = lang;
  currentLanguage.value = lang;
  localStorage.setItem('language', lang);
};

// Gestion du thème
const isDark = ref(false);
const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark-theme', isDark.value);
};

// Menu responsive
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
