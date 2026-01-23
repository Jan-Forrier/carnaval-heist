"use client";

import { useEffect } from "react";
import { useCookieConsent } from "./cookie-consent/cookie-context";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5W7S79QX';

export default function GTMProvider() {
  const { state } = useCookieConsent();

  // Initialize dataLayer early with consent state (before GTM loads)
  // This is required for GA4 Consent Mode v2
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize dataLayer if it doesn't exist
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Push consent state to dataLayer BEFORE GTM loads
      // This allows GA4 Consent Mode to work correctly
      (window as any).dataLayer.push({
        event: 'cookie_consent_update',
        consent: state.consent,
        hasConsented: state.hasConsented,
      });
    }
  }, [state.consent, state.hasConsented]);

  useEffect(() => {
    // Only load GTM if user has consented to analytics or marketing
    if (state.hasConsented && (state.consent.analytics || state.consent.marketing)) {
      loadGTM();
    }
  }, [state.hasConsented, state.consent.analytics, state.consent.marketing]);

  const loadGTM = () => {
    // Check if GTM is already loaded
    if (typeof window !== 'undefined' && !(window as any).dataLayer?.some((item: any) => item['gtm.start'])) {
      // GTM script
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(gtmScript);

      // GTM noscript
      const gtmNoscript = document.createElement('noscript');
      const gtmIframe = document.createElement('iframe');
      gtmIframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
      gtmIframe.height = '0';
      gtmIframe.width = '0';
      gtmIframe.style.display = 'none';
      gtmIframe.style.visibility = 'hidden';
      gtmNoscript.appendChild(gtmIframe);
      document.body.insertBefore(gtmNoscript, document.body.firstChild);

      // Push initial dataLayer event (GTM will handle this automatically, but we can add it for clarity)
      (window as any).dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
      });
    }
  };

  return null; // This component doesn't render anything
}
