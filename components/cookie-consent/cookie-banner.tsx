'use client';

import React from 'react';
import { useCookieConsent } from './cookie-context';

export default function CookieBanner() {
  const { state, acceptAll, rejectAll, showPreferences } = useCookieConsent();

  if (!state.showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-body font-semibold text-fluid-body-lg mb-2 text-black">
              Cookies op deze website
            </h3>
            <p className="font-body font-normal text-fluid-body text-black mb-2">
              We gebruiken cookies om uw ervaring te verbeteren en om onze website te analyseren. U kunt kiezen welke cookies u accepteert.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-black">
              <a 
                href="https://www.knokke-heist.be/gemeente-en-bestuur/over-knokke-heist/factuurvoorwaarden/privacybeleid-gemeente-knokke-heist" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600 transition-colors"
                aria-label="Privacybeleid van Gemeente Knokke-Heist (opent in nieuw tabblad)"
              >
                Privacybeleid
              </a>
              <span>•</span>
              <a 
                href="/cookieverklaring" 
                className="underline hover:text-gray-600 transition-colors"
                aria-label="Cookieverklaring van deze website"
              >
                Cookieverklaring
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <button
              onClick={showPreferences}
              className="font-body font-normal text-fluid-body px-4 py-2 border border-black rounded hover:bg-gray-100 transition-colors text-black w-full sm:w-auto"
            >
              Instellingen
            </button>
            <button
              onClick={rejectAll}
              className="font-body font-normal text-fluid-body px-4 py-2 border border-black rounded hover:bg-gray-100 transition-colors text-black w-full sm:w-auto"
            >
              Weigeren
            </button>
            <button
              onClick={acceptAll}
              className="font-body font-normal text-fluid-body px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
