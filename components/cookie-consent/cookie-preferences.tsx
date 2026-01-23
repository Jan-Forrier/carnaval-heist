'use client';

import React, { useEffect, useState } from 'react';
import { useCookieConsent } from './cookie-context';
import { COOKIE_CATEGORIES, CookieCategory } from './cookie-types';
import { scanBrowserCookies, DetectedCookie } from '@/lib/cookie-scanner';
import { X, Info } from 'lucide-react';

export default function CookiePreferences() {
  const { state, acceptAll, rejectAll, acceptCategory, rejectCategory, hidePreferences, updateConsent } = useCookieConsent();
  const [detectedCookies, setDetectedCookies] = useState<DetectedCookie[]>([]);

  // Scan cookies when component mounts or preferences are shown
  useEffect(() => {
    if (state.showPreferences) {
      const scanned = scanBrowserCookies();
      setDetectedCookies(scanned);
    }
  }, [state.showPreferences]);

  // Helper to get cookies for a category (only detected ones for marketing/analytics)
  const getCookiesForCategory = (categoryKey: CookieCategory) => {
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

  if (!state.showPreferences) {
    return null;
  }

  const handleCategoryToggle = (category: CookieCategory, enabled: boolean) => {
    if (enabled) {
      acceptCategory(category);
    } else {
      rejectCategory(category);
    }
  };

  const handleSavePreferences = () => {
    hidePreferences();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-fluid-display text-black">
                Cookievoorkeuren
              </h2>
              <p className="font-body font-normal text-fluid-body text-black mt-1">
                Kies welke cookies u wilt accepteren. Essentiële cookies kunnen niet worden uitgeschakeld.
              </p>
            </div>
            <button
              onClick={hidePreferences}
              className="h-8 w-8 p-0 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4 text-black" />
            </button>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6 mb-6">
            {Object.entries(COOKIE_CATEGORIES).map(([key, category]) => {
              const categoryKey = key as CookieCategory;
              const isEnabled = state.consent[categoryKey];
              const isRequired = category.required;

              return (
                <div key={key} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-body font-semibold text-fluid-body-lg text-black">
                          {category.name}
                        </h3>
                        {isRequired && (
                          <span className="text-xs bg-black text-white px-2 py-1 rounded">
                            Verplicht
                          </span>
                        )}
                      </div>
                      <p className="font-body font-normal text-fluid-body text-black">
                        {category.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEnabled}
                          onChange={(e) => handleCategoryToggle(categoryKey, e.target.checked)}
                          disabled={isRequired}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"></div>
                      </label>
                    </div>
                  </div>

                  {/* Cookie Details */}
                  {(() => {
                    const cookiesToShow = getCookiesForCategory(categoryKey);
                    return cookiesToShow.length > 0 ? (
                      <div className="mt-3">
                        <details className="group">
                          <summary className="flex items-center gap-2 text-sm text-black cursor-pointer hover:text-gray-600 transition-colors font-body font-normal">
                            <Info className="h-4 w-4" />
                            Bekijk cookies ({cookiesToShow.length})
                          </summary>
                          <div className="mt-3 space-y-2">
                            {cookiesToShow.map((cookie, index) => (
                              <div key={index} className="bg-gray-50 rounded p-3 text-sm">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-body font-semibold text-black">{cookie.name}</span>
                                  {cookie.thirdParty && (
                                    <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded">
                                      {cookie.thirdParty}
                                    </span>
                                  )}
                                </div>
                                <p className="font-body font-normal text-black mb-1">
                                  {cookie.purpose}
                                </p>
                                <p className="text-xs text-black">
                                  <strong>Bewaartermijn:</strong> {cookie.retention}
                                </p>
                              </div>
                            ))}
                          </div>
                        </details>
                      </div>
                    ) : categoryKey !== 'essential' ? (
                      <div className="mt-3 text-sm text-black font-body font-normal">
                        Bekijk cookies (0) - {categoryKey === 'marketing' ? 'Geen marketing cookies gedetecteerd' : 'Geen analytics cookies gedetecteerd'}
                      </div>
                    ) : null;
                  })()}
                </div>
              );
            })}
          </div>

          {/* Links */}
          <div className="border-t border-gray-200 pt-4 mb-6">
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
              <a 
                href="/cookieverklaring" 
                className="underline hover:text-gray-600 transition-colors"
                aria-label="Cookieverklaring van deze website"
              >
                Cookieverklaring
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={rejectAll}
              className="font-body font-normal text-fluid-body px-4 py-2 border border-black rounded hover:bg-gray-100 transition-colors text-black"
            >
              Alles weigeren
            </button>
            <button
              onClick={acceptAll}
              className="font-body font-normal text-fluid-body px-4 py-2 border border-black rounded hover:bg-gray-100 transition-colors text-black"
            >
              Alles accepteren
            </button>
            <button
              onClick={handleSavePreferences}
              className="font-body font-normal text-fluid-body px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Voorkeuren opslaan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
