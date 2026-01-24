// Initialize i18next for API consumers (gets bundled into bundle.api.js)
// This must be first so t() calls return the English keys instead of empty strings
import i18n from 'i18next';

i18n.init({
  lng: 'en',
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: false,
  interpolation: { escapeValue: false },
});

// Polyfills for browser/web worker environment
import * as jspb from 'google-protobuf';

if (typeof globalThis !== 'undefined') {
  // Add a basic require polyfill for CommonJS modules
  if (typeof globalThis.require === 'undefined') {
    // @ts-expect-error - we're creating a minimal require implementation
    globalThis.require = (moduleId: string) => {
      switch (moduleId) {
        case 'google-protobuf':
          return jspb;
        default:
          throw new Error(
            `Module not found: ${moduleId}. Add to polyfills if needed.`,
          );
      }
    };
  }
}

// Also set on global for compatibility
if (typeof global !== 'undefined') {
  if (typeof global.require === 'undefined') {
    global.require = globalThis.require;
  }
}
