import i18n from 'i18next';

// Initialize i18next for the API package.
// This uses natural-language English keys which i18next returns as-is
// when no translation resources are loaded.
i18n.init({
  lng: 'en',

  // Allow keys to be phrases containing `:` and `.`
  nsSeparator: false,
  keySeparator: false,

  // Do not load a fallback - use keys as-is for English
  fallbackLng: false,

  interpolation: {
    // Don't escape values - not needed for API (non-HTML context)
    escapeValue: false,
  },
});

export default i18n;
