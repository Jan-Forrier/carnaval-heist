'use client';

import { useEffect, useState } from 'react';
import { COOKIE_CATEGORIES } from '@/components/cookie-consent/cookie-types';
import { scanBrowserCookies, DetectedCookie } from '@/lib/cookie-scanner';
import { useCookieConsent } from '@/components/cookie-consent/cookie-context';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookieVerklaringPage() {
  const [detectedCookies, setDetectedCookies] = useState<DetectedCookie[]>([]);
  const { showPreferences } = useCookieConsent();

  useEffect(() => {
    const scanned = scanBrowserCookies();
    setDetectedCookies(scanned);
  }, []);

  // Helper to get cookies for a category
  const getCookiesForCategory = (categoryKey: 'essential' | 'analytics' | 'marketing') => {
    const categoryData = COOKIE_CATEGORIES[categoryKey];
    
    // For essential cookies, always show all
    if (categoryKey === 'essential') {
      return categoryData.cookies;
    }
    
    // For analytics/marketing, only show detected cookies
    const detectedInCategory = detectedCookies.filter(c => c.category === categoryKey);
    const detectedMap = new Map(detectedInCategory.map(c => [c.name, c]));
    
    return categoryData.cookies.filter((cookie) => {
      return detectedMap.has(cookie.name);
    });
  };

  return (
    <div className="flex flex-col items-start relative w-full min-h-screen">
      <Header />
      <main className="bg-white flex flex-col items-start w-full">
        <div className="flex flex-col items-start px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 relative w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8 items-start relative w-full">
            <div className="flex flex-col gap-4 items-start relative w-full">
              <h1 className="font-display text-fluid-display text-black tracking-[1.92px] uppercase">
                Cookieverklaring
              </h1>
              <p className="font-body font-normal text-fluid-body text-black">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none w-full">
              <div className="mb-8">
                <p className="font-body font-normal text-fluid-body text-black mb-4">
                  Deze website gebruikt cookies om uw ervaring te verbeteren en om onze website te analyseren. 
                  Hieronder vindt u een overzicht van de cookies die we gebruiken en waarvoor ze dienen.
                </p>
              </div>

              {/* Render categories */}
              {Object.entries(COOKIE_CATEGORIES).map(([categoryKey, categoryData], index) => {
                const typedKey = categoryKey as 'essential' | 'analytics' | 'marketing';
                const cookiesToShow = getCookiesForCategory(typedKey);

                return (
                  <div key={index} className="mb-8 p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="font-display text-fluid-h2 text-black">
                        {categoryData.name}
                      </h2>
                      {categoryData.required && (
                        <span className="px-2 py-1 bg-black text-white text-xs rounded font-body font-normal">
                          Verplicht
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="font-body font-normal text-fluid-body text-black">
                        {categoryData.description}
                      </p>
                    </div>

                    {cookiesToShow.length > 0 ? (
                      <div className="mt-4">
                        <h3 className="font-body font-semibold text-fluid-body-lg text-black mb-3">
                          Cookies in deze categorie ({cookiesToShow.length})
                        </h3>
                        <div className="space-y-3">
                          {cookiesToShow.map((cookie, cookieIndex) => {
                            const detected = detectedCookies.find(c => c.name === cookie.name);
                            return (
                              <div 
                                key={cookieIndex} 
                                className={`p-3 rounded border ${
                                  detected 
                                    ? 'bg-green-50 border-green-200' 
                                    : 'bg-gray-50 border-gray-200'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="font-body font-semibold text-fluid-body text-black">{cookie.name}</div>
                                  {detected && (
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-body font-normal">
                                      Actief
                                    </span>
                                  )}
                                </div>
                                <div className="font-body font-normal text-fluid-body text-black mb-1">
                                  {cookie.purpose}
                                </div>
                                <div className="text-xs text-black font-body font-normal">
                                  <strong>Bewaartermijn:</strong> {cookie.retention}
                                  {cookie.thirdParty && (
                                    <span> • <strong>Derde partij:</strong> {cookie.thirdParty}</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : typedKey !== 'essential' ? (
                      <div className="mt-4 text-sm text-black font-body font-normal">
                        Geen cookies gedetecteerd in deze categorie.
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-body font-semibold text-fluid-body-lg text-black mb-2">
                  Uw cookievoorkeuren beheren
                </h3>
                <p className="font-body font-normal text-fluid-body text-black mb-4">
                  U kunt uw cookievoorkeuren op elk moment aanpassen door op de knop hieronder te klikken.
                </p>
                <button
                  onClick={showPreferences}
                  className="font-body font-normal text-fluid-body px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Cookievoorkeuren aanpassen
                </button>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-4 text-sm text-black font-body font-normal">
                  <a 
                    href="https://www.knokke-heist.be/gemeente-en-bestuur/over-knokke-heist/factuurvoorwaarden/privacybeleid-gemeente-knokke-heist" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-600 transition-colors"
                    aria-label="Privacybeleid van Gemeente Knokke-Heist (opent in nieuw tabblad)"
                  >
                    Privacybeleid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
