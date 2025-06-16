import i18n from 'i18next';

// Define translations directly
const resources = {
  en: {
    translation: {
      'services.events.title': 'Events',
      'services.events.subtitle': 'Organization',
      'services.events.description': 'We provide a wide range of events with high-tech standards.',
      'about.images.cat': 'Cat in black and white',
      'about.images.landscapeDock': 'Landscape with dock',
      'contact.images.silhouetteStripes': 'Silhouette with stripes',
      'about.images.microphone': 'Microphone',
      'services.events.features.socialEvents.title': 'Social and Charitable Events',
      'services.events.features.socialEvents.description': 'We offer professional video capture services for charitable events, galas, and social initiatives, at cinematic quality, highlighting the emotion and message of the moment.',
      'services.events.features.corporateEvents.title': 'Corporate Events',
      'services.events.features.corporateEvents.description': 'We create high-resolution video materials for conferences, product launches, and business meetings, ideal for internal or external promotion.',
      'services.events.features.thematicEvents.title': 'Thematic Events',
      'services.events.features.thematicEvents.description': 'We capture the unique atmosphere of themed parties, anniversaries, and festivals with dynamic images and creative editing, perfect for online promotion.'
    }
  },
  ro: {
    translation: {
      'services.events.title': 'Evenimente',
      'services.events.subtitle': 'Organizare',
      'services.events.description': 'Vă punem la dispoziție o gamă largă de evenimente cu standarde de înaltă tehnologie.',
      'about.images.cat': 'Pisică în alb și negru',
      'about.images.landscapeDock': 'Peisaj cu doc',
      'contact.images.silhouetteStripes': 'Siluetă cu dungi',
      'about.images.microphone': 'Microfon',
      'services.events.features.socialEvents.title': 'Evenimente Sociale și Caritabile',
      'services.events.features.socialEvents.description': 'Oferim servicii profesionale de captare video pentru evenimente caritabile, gale și inițiative sociale, la calitate cinematografică, evidențiind emoția și mesajul momentului.',
      'services.events.features.corporateEvents.title': 'Evenimente Corporative',
      'services.events.features.corporateEvents.description': 'Realizăm materiale video de înaltă rezoluție pentru conferințe, lansări de produse și întâlniri de afaceri, ideale pentru promovare internă sau externă.',
      'services.events.features.thematicEvents.title': 'Evenimente Tematice',
      'services.events.features.thematicEvents.description': 'Surprindem atmosfera unică a petrecerilor tematice, aniversărilor și festivalurilor cu imagini dinamice și montaj creativ, perfecte pentru promovarea online.'
    }
  }
};

// Initialize i18n instance
const i18nInstance = i18n.createInstance();

// Initialize i18n with translations
i18nInstance.init({
  resources,
  fallbackLng: 'en',
  lng: 'ro',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  returnObjects: false,
  ns: ['translation'],
  defaultNS: 'translation',
  initImmediate: false
});

export default i18nInstance; 