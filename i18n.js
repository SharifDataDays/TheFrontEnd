const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'fa',
  otherLanguages: ['en'],
});

const { i18n, appWithTranslation, withTranslation } = NextI18NextInstance;

module.exports = {
  default: NextI18NextInstance,
  appWithTranslation,
  withTranslation,
  i18n,
};
