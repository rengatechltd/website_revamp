var enButton = document.getElementById('en-btn');
var frButton = document.getElementById('fr-btn');
const languageSelector = document.getElementById('languageSelector');
const lang = localStorage.getItem('language');

if (lang === "fr") {
  document.getElementById('languageSelector').value = 2
} else if (lang === "en") {
  document.getElementById('languageSelector').value = 1
}


var i18n = domI18n({
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['en', 'fr'],
  defaultLanguage: 'en'
});


languageSelector.addEventListener("change", function (event) {
  const lang = localStorage.getItem('language');

  console.log(lang)
  if (lang === null) {
    localStorage.setItem('language', 'fr')

    i18n.changeLanguage("en")
  } else if (lang === "fr") {
    i18n.changeLanguage("en")
    localStorage.setItem('language', 'en')
  } else if (lang === "en") {
    i18n.changeLanguage("fr")
    localStorage.setItem('language', 'fr')
  }
})


// enButton.onclick = function (e) {
//   // i18n.changeLanguage('en');
//   localStorage.setItem('language', 'en')
//   const language = localStorage.getItem('language');
//   i18n.changeLanguage(language)
//   e.preventDefault();

// };

// frButton.onclick = function (e) {
//   // i18n.changeLanguage('fr');
//   localStorage.setItem('language', 'fr')
//   const language = localStorage.getItem('language');
//   i18n.changeLanguage(language)
//   e.preventDefault();

// }
const pageLoad = () => {
  //fetch language on local storage
  const language = localStorage.getItem('language')
  i18n.changeLanguage(language)
  console.log("Page Loading")
}

pageLoad()