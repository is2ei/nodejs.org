/* eslint-disable no-var */
(function () {
  var isInDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (getTheme() == null) {
    setTheme(isInDarkMode ? 'dark' : 'light');
  } else {
    setTheme(getTheme());
  }

  function setTheme(theme) {
    document.querySelector('html').setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }

  function getTheme() {
    return window.localStorage.getItem('theme');
  }
})();
