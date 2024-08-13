var enButton = document.getElementById('en-btn');
var frButton = document.getElementById('fr-btn');
const language = document.getElementById('languageSelector');
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

enButton.onclick = function () {
  // i18n.changeLanguage('en');
  localStorage.setItem('language',  'en')
  const language = localStorage.getItem('language');
  i18n.changeLanguage(language)

};

frButton.onclick = function () {
  // i18n.changeLanguage('fr');
  localStorage.setItem('language',  'fr')
  const language = localStorage.getItem('language');
  i18n.changeLanguage(language)

}
const pageLoad = () => {
  //fetch language on local storage
  const language = localStorage.getItem('language')
  i18n.changeLanguage(language)
  console.log("Page Loading")
}

pageLoad()