import { Phone, MessageCircle } from 'lucide-react';
import { SITE, WHATSAPP_URL } from '../config/site.js';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking.js';

/**
 * Mobilde ekranın altına sabitlenen iki büyük iletişim butonu.
 * Google Ads ziyaretçisi için birincil dönüşüm alanıdır.
 */
export default function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar" role="region" aria-label="Hızlı iletişim">
      <a
        href={SITE.phoneHref}
        className="mobile-cta mobile-cta-call"
        onClick={() => trackPhoneClick('mobile_bar')}
      >
        <Phone size={22} aria-hidden="true" />
        <span>Hemen Ara</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta mobile-cta-wa"
        onClick={() => trackWhatsAppClick('mobile_bar')}
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
