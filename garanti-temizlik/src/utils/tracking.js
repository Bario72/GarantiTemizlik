// Google Ads / GTM dönüşüm takibi altyapısı.
// Tüm buton tıklamaları window.dataLayer'a standart event olarak yazılır.
// GTM tarafında bu event'leri tetikleyici olarak kullanıp Google Ads
// dönüşüm etiketlerini bağlayabilirsiniz (README.md'de adım adım anlatıldı).
//
// NOT: Buton tıklaması, tamamlanmış bir telefon görüşmesi veya WhatsApp
// sohbeti anlamına gelmez; Ads tarafında "tıklama" dönüşümü olarak değerlendirin.

import { SITE } from '../config/site.js';

export function initTagManager() {
  window.dataLayer = window.dataLayer || [];
  if (!SITE.gtmId) return; // ID girilmediyse GTM yüklenmez, sahte ID kullanılmaz.
  if (document.getElementById('gtm-script')) return;

  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.id = 'gtm-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${SITE.gtmId}`;
  document.head.appendChild(s);
}

export function trackEvent(eventName, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

// click_location örnekleri: 'header', 'hero', 'service_card', 'service_detail',
// 'cta_band', 'footer', 'mobile_bar', 'contact_page'
export function trackPhoneClick(clickLocation, serviceSlug) {
  trackEvent('phone_click', {
    click_location: clickLocation,
    service: serviceSlug || 'genel',
  });
}

export function trackWhatsAppClick(clickLocation, serviceSlug) {
  trackEvent('whatsapp_click', {
    click_location: clickLocation,
    service: serviceSlug || 'genel',
  });
}
