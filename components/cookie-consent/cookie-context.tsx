'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { 
  CookieConsent, 
  CookieConsentState, 
  DEFAULT_CONSENT, 
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION 
} from './cookie-types';

interface CookieConsentContextType {
  state: CookieConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  acceptCategory: (category: keyof CookieConsent) => void;
  rejectCategory: (category: keyof CookieConsent) => void;
  showPreferences: () => void;
  hidePreferences: () => void;
  hideBanner: () => void;
  updateConsent: (consent: CookieConsent) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [state, setState] = useState<CookieConsentState>({
    consent: DEFAULT_CONSENT,
    hasConsented: false,
    showBanner: false,
    showPreferences: false,
  });

  // Load consent from localStorage on mount
  useEffect(() => {
    const loadConsent = () => {
      try {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.version === CONSENT_VERSION) {
            setState(prev => ({
              ...prev,
              consent: parsed.consent,
              hasConsented: true,
              showBanner: false,
            }));
            return;
          }
        }
      } catch (error) {
        console.error('Error loading cookie consent:', error);
      }
      
      // Show banner if no valid consent found
      setState(prev => ({
        ...prev,
        showBanner: true,
      }));
    };

    loadConsent();
  }, []);

  // Save consent to localStorage
  const saveConsent = useCallback((consent: CookieConsent) => {
    try {
      const consentData = {
        consent,
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  }, []);

  // Update GTM dataLayer when consent changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cookie_consent_update',
        consent: state.consent,
        hasConsented: state.hasConsented,
      });
    }
  }, [state.consent, state.hasConsented]);

  const acceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    
    setState(prev => ({
      ...prev,
      consent: newConsent,
      hasConsented: true,
      showBanner: false,
      showPreferences: false,
    }));
    
    saveConsent(newConsent);
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    const newConsent: CookieConsent = {
      essential: true, // Always true
      analytics: false,
      marketing: false,
    };
    
    setState(prev => ({
      ...prev,
      consent: newConsent,
      hasConsented: true,
      showBanner: false,
      showPreferences: false,
    }));
    
    saveConsent(newConsent);
  }, [saveConsent]);

  const acceptCategory = useCallback((category: keyof CookieConsent) => {
    const newConsent = {
      ...state.consent,
      [category]: true,
    };
    
    setState(prev => ({
      ...prev,
      consent: newConsent,
      hasConsented: true,
    }));
    
    saveConsent(newConsent);
  }, [state.consent, saveConsent]);

  const rejectCategory = useCallback((category: keyof CookieConsent) => {
    if (category === 'essential') return; // Can't disable essential cookies
    
    const newConsent = {
      ...state.consent,
      [category]: false,
    };
    
    setState(prev => ({
      ...prev,
      consent: newConsent,
      hasConsented: true,
    }));
    
    saveConsent(newConsent);
  }, [state.consent, saveConsent]);

  const showPreferences = useCallback(() => {
    setState(prev => ({
      ...prev,
      showPreferences: true,
      showBanner: false,
    }));
  }, []);

  const hidePreferences = useCallback(() => {
    setState(prev => ({
      ...prev,
      showPreferences: false,
    }));
  }, []);

  const hideBanner = useCallback(() => {
    setState(prev => ({
      ...prev,
      showBanner: false,
    }));
  }, []);

  const updateConsent = useCallback((consent: CookieConsent) => {
    setState(prev => ({
      ...prev,
      consent,
      hasConsented: true,
      showBanner: false,
      showPreferences: false,
    }));
    
    saveConsent(consent);
  }, [saveConsent]);

  const value: CookieConsentContextType = {
    state,
    acceptAll,
    rejectAll,
    acceptCategory,
    rejectCategory,
    showPreferences,
    hidePreferences,
    hideBanner,
    updateConsent,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
