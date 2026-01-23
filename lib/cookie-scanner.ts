/**
 * Cookie Scanner Utility
 * Scans browser cookies and matches them with known cookie patterns
 * This helps dynamically detect which cookies are actually set via GTM
 */

export interface DetectedCookie {
  name: string;
  category: 'essential' | 'analytics' | 'marketing' | 'unknown';
  thirdParty?: string;
}

/**
 * Known cookie patterns that can be set via GTM
 * These patterns help identify which cookies are present
 */
const COOKIE_PATTERNS: Array<{
  pattern: RegExp | string;
  category: 'essential' | 'analytics' | 'marketing';
  thirdParty?: string;
  name?: string; // Specific cookie name if pattern is exact match
}> = [
  // Google Analytics cookies
  { pattern: /^_ga$/, category: 'analytics', thirdParty: 'Google', name: '_ga' },
  { pattern: /^_ga_[A-Z0-9]+$/, category: 'analytics', thirdParty: 'Google' },
  { pattern: /^_gid$/, category: 'analytics', thirdParty: 'Google', name: '_gid' },
  { pattern: /^_gat$/, category: 'analytics', thirdParty: 'Google', name: '_gat' },
  { pattern: /^_gat_[A-Z0-9]+$/, category: 'analytics', thirdParty: 'Google' },
  { pattern: /^_gat_gtag_[A-Z0-9]+$/, category: 'analytics', thirdParty: 'Google' },
  
  // Facebook Pixel cookies
  { pattern: /^_fbp$/, category: 'marketing', thirdParty: 'Facebook', name: '_fbp' },
  { pattern: /^_fbc$/, category: 'marketing', thirdParty: 'Facebook' },
  { pattern: /^fr$/, category: 'marketing', thirdParty: 'Facebook' },
  
  // Google Ads / Marketing
  { pattern: /^_gcl_[a-z]+$/, category: 'marketing', thirdParty: 'Google' },
  { pattern: /^IDE$/, category: 'marketing', thirdParty: 'Google' },
  { pattern: /^test_cookie$/, category: 'marketing', thirdParty: 'Google' },
  
  // Other common marketing cookies
  { pattern: /^ads_prefs$/, category: 'marketing', name: 'ads_prefs' },
  
  // Essential cookies (session, consent, etc.)
  { pattern: /^session_id$/, category: 'essential', name: 'session_id' },
  { pattern: /^cookie_consent$/, category: 'essential', name: 'cookie_consent' },
  { pattern: /^cookie_consent_preferences$/, category: 'essential' },
];

/**
 * Scans all cookies in the browser and categorizes them
 */
export function scanBrowserCookies(): DetectedCookie[] {
  if (typeof window === 'undefined') {
    return [];
  }

  const detectedCookies: DetectedCookie[] = [];
  const cookieString = document.cookie;

  if (!cookieString) {
    return detectedCookies;
  }

  // Parse cookies from document.cookie string
  const cookies = cookieString.split(';').map(cookie => {
    const [name, ...valueParts] = cookie.trim().split('=');
    return {
      name: name.trim(),
      value: valueParts.join('='), // In case value contains '='
    };
  });

  // Match each cookie against known patterns
  cookies.forEach(({ name }) => {
    let matched = false;
    
    for (const patternInfo of COOKIE_PATTERNS) {
      const pattern = typeof patternInfo.pattern === 'string' 
        ? new RegExp(`^${patternInfo.pattern}$`)
        : patternInfo.pattern;
      
      if (pattern.test(name)) {
        detectedCookies.push({
          name: patternInfo.name || name,
          category: patternInfo.category,
          thirdParty: patternInfo.thirdParty,
        });
        matched = true;
        break;
      }
    }
    
    // If no pattern matched, categorize as unknown
    if (!matched) {
      detectedCookies.push({
        name,
        category: 'unknown',
      });
    }
  });

  // Remove duplicates (same cookie name)
  const uniqueCookies = new Map<string, DetectedCookie>();
  detectedCookies.forEach(cookie => {
    if (!uniqueCookies.has(cookie.name)) {
      uniqueCookies.set(cookie.name, cookie);
    }
  });

  return Array.from(uniqueCookies.values());
}

/**
 * Gets detected cookies for a specific category
 */
export function getDetectedCookiesByCategory(
  category: 'essential' | 'analytics' | 'marketing'
): DetectedCookie[] {
  const allCookies = scanBrowserCookies();
  return allCookies.filter(cookie => cookie.category === category);
}

/**
 * Checks if a specific cookie is present in the browser
 */
export function isCookiePresent(cookieName: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const cookies = scanBrowserCookies();
  return cookies.some(cookie => cookie.name === cookieName);
}
