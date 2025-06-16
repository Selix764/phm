import i18nServer from './i18n-server';

type TranslationFunction = (key: string, options?: any) => string;

let isInitialized = false;

// Initialize i18n server
const initI18nServer = async () => {
  if (!isInitialized) {
    await i18nServer.init();
    isInitialized = true;
  }
};

export async function getServerTranslation(locale: string) {
  await initI18nServer();
  
  const t: TranslationFunction = (key: string, options?: any) => {
    const result = i18nServer.t(key, {
      lng: locale,
      ...options
    });
    return typeof result === 'string' ? result : String(result);
  };

  return {
    t,
    i18n: i18nServer
  };
}

export function getClientTranslation(lng: string = 'ro') {
  return {
    t: (key: string) => {
      // This is a placeholder that will be replaced by the client-side i18n
      return key;
    }
  };
} 