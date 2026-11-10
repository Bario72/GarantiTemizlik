import { useEffect } from 'react';
import { SITE } from '../config/site.js';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sayfa bazlı SEO: title, description, canonical, Open Graph ve
 * isteğe bağlı JSON-LD (örn. Service schema) yönetir.
 */
export function useSeo({ title, description, path = '/', jsonLd = null }) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', SITE.url + path);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', SITE.url + path);

    let ldScript = null;
    if (jsonLd) {
      ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      ldScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(ldScript);
    }
    return () => {
      if (ldScript) document.head.removeChild(ldScript);
    };
  }, [title, description, path, jsonLd]);
}
