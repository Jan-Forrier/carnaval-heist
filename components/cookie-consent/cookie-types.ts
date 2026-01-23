export type CookieCategory = 'essential' | 'analytics' | 'marketing';

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentState {
  consent: CookieConsent;
  hasConsented: boolean;
  showBanner: boolean;
  showPreferences: boolean;
}

export interface CookieInfo {
  name: string;
  purpose: string;
  retention: string;
  category: CookieCategory;
  thirdParty?: string;
}

export interface CookieCategoryInfo {
  name: string;
  description: string;
  required: boolean;
  cookies: CookieInfo[];
}

export const COOKIE_CATEGORIES: Record<CookieCategory, CookieCategoryInfo> = {
  essential: {
    name: 'Essentiële cookies',
    description: 'Deze cookies zijn noodzakelijk voor de werking van de website en kunnen niet worden uitgeschakeld. Ze worden meestal alleen ingesteld als reactie op acties die u uitvoert en die een verzoek om diensten betekenen, zoals het instellen van uw privacyvoorkeuren, inloggen of het invullen van formulieren.',
    required: true,
    cookies: [
      {
        name: 'cookie_consent',
        purpose: 'Opslaan van cookie voorkeuren',
        retention: '1 jaar',
        category: 'essential'
      },
      {
        name: 'cookie_consent_preferences',
        purpose: 'Opslaan van gedetailleerde cookie voorkeuren',
        retention: '1 jaar',
        category: 'essential'
      }
    ]
  },
  analytics: {
    name: 'Analytische cookies',
    description: 'Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken door informatie te verzamelen en te rapporteren. Dit helpt ons de website te verbeteren.',
    required: false,
    cookies: [
      {
        name: '_ga',
        purpose: 'Google Analytics - unieke gebruikers identificatie',
        retention: '2 jaar',
        category: 'analytics',
        thirdParty: 'Google'
      },
      {
        name: '_gid',
        purpose: 'Google Analytics - gebruikerssessie',
        retention: '24 uur',
        category: 'analytics',
        thirdParty: 'Google'
      },
      {
        name: '_gat',
        purpose: 'Google Analytics - verzoeken beperken',
        retention: '1 minuut',
        category: 'analytics',
        thirdParty: 'Google'
      },
      {
        name: '_ga_',
        purpose: 'Google Analytics 4 - unieke gebruikers identificatie',
        retention: '2 jaar',
        category: 'analytics',
        thirdParty: 'Google'
      }
    ]
  },
  marketing: {
    name: 'Marketing cookies',
    description: 'Deze cookies worden gebruikt om bezoekers te volgen op verschillende websites. Het doel is om advertenties weer te geven die relevant en aantrekkelijk zijn voor de individuele gebruiker.',
    required: false,
    cookies: [
      {
        name: '_fbp',
        purpose: 'Facebook Pixel - advertentie tracking',
        retention: '90 dagen',
        category: 'marketing',
        thirdParty: 'Facebook'
      },
      {
        name: '_fbc',
        purpose: 'Facebook Pixel - browser identificatie',
        retention: '90 dagen',
        category: 'marketing',
        thirdParty: 'Facebook'
      },
      {
        name: 'fr',
        purpose: 'Facebook Pixel - advertentie optimalisatie',
        retention: '90 dagen',
        category: 'marketing',
        thirdParty: 'Facebook'
      },
      {
        name: '_gcl_',
        purpose: 'Google Ads - conversie tracking',
        retention: '90 dagen',
        category: 'marketing',
        thirdParty: 'Google'
      }
    ]
  },
};

export const DEFAULT_CONSENT: CookieConsent = {
  essential: true, // Always true, can't be disabled
  analytics: false,
  marketing: false
};

export const CONSENT_STORAGE_KEY = 'cookie_consent_preferences';
export const CONSENT_VERSION = '1.0';
