import english from './english';
import arabic from './arabic';
const languages = {
  english,
  arabic,
};
const languageData = (languageChange) => {
  let locale = localStorage.getItem('locale') || 'english';
  if (languageChange) {
    locale === 'english' ? (locale = 'arabic') : (locale = 'english');
    localStorage.setItem('locale', locale);
  }
  let sl = {};
  if (Object.keys(languages).includes(locale)) {
    sl = languages[locale];
    sl = {right:locale === 'arabic' ? true:false,left:locale === 'english' ? true:false, ...sl};
  } else {
    sl = {left:false,right:true, ...languages['english']};
  }
  document.getElementsByTagName('html')[0].setAttribute('dir', sl.dir);
  return sl;
};

export default languageData;
