// Tek merkezden yönetilen site bilgileri.
// Telefon, WhatsApp, adres veya domain değişirse YALNIZCA bu dosyayı güncelleyin.

export const SITE = {
  name: 'Garanti Temizlik',
  tagline: 'Halı ve Koltuk Yıkama',
  city: 'Batman',

  // TODO: Yayına alırken gerçek domaininizi yazın (sitemap.xml ve robots.txt'de de güncelleyin)
  url: 'https://www.SIZIN-DOMAINInIZ.com',

  phoneDisplay: '0543 219 77 72',
  phoneHref: 'tel:+905432197772',

  whatsappNumber: '905432197772',
  whatsappMessage:
    'Merhaba, Garanti Temizlik hizmetleriniz hakkında bilgi almak istiyorum.',

  address: 'Kültür Mah. 2605 Sk. No: 45/B Batman',
  // Google Maps embed için adres sorgusu
  mapsQuery: 'Kültür Mah. 2605 Sk. No: 45/B Batman',

  // GOOGLE TAG MANAGER: Container ID'nizi buraya yazın (örn. 'GTM-XXXXXXX').
  // Boş bırakılırsa GTM yüklenmez; event'ler yine window.dataLayer'a yazılır.
  gtmId: '',
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;

export function serviceWhatsAppUrl(serviceTitle) {
  const msg = `Merhaba, Garanti Temizlik ${serviceTitle} hizmetiniz hakkında bilgi almak istiyorum.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
