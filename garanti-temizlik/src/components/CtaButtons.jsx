import { Phone, MessageCircle } from 'lucide-react';
import { SITE, WHATSAPP_URL, serviceWhatsAppUrl } from '../config/site.js';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking.js';

/**
 * Hemen Ara butonu.
 * variant: 'solid' | 'outline' | 'ghost'
 * location: dönüşüm takibi için tıklama konumu (header, hero, footer...)
 */
export function CallButton({
  location,
  serviceSlug,
  variant = 'solid',
  size = 'md',
  label = 'Hemen Ara',
  showNumber = false,
  className = '',
}) {
  return (
    <a
      href={SITE.phoneHref}
      className={`btn btn-call btn-${variant} btn-${size} ${className}`}
      onClick={() => trackPhoneClick(location, serviceSlug)}
      aria-label={`Telefonla ara: ${SITE.phoneDisplay}`}
    >
      <Phone size={size === 'lg' ? 22 : 18} aria-hidden="true" />
      <span>{showNumber ? SITE.phoneDisplay : label}</span>
    </a>
  );
}

/**
 * WhatsApp butonu. serviceTitle verilirse mesaj hizmete özel başlar.
 */
export function WhatsAppButton({
  location,
  serviceSlug,
  serviceTitle,
  variant = 'whatsapp',
  size = 'md',
  label = "WhatsApp'tan Bilgi Al",
  className = '',
}) {
  const href = serviceTitle ? serviceWhatsAppUrl(serviceTitle) : WHATSAPP_URL;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-wa btn-${variant} btn-${size} ${className}`}
      onClick={() => trackWhatsAppClick(location, serviceSlug)}
      aria-label="WhatsApp üzerinden bilgi al"
    >
      <MessageCircle size={size === 'lg' ? 22 : 18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
