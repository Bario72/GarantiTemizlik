import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE, WHATSAPP_URL } from '../config/site.js';
import { SERVICES } from '../data/services.js';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/logo-garanti-temizlik-beyaz.png"
            alt="Garanti Temizlik logosu"
            width="96"
            height="84"
            loading="lazy"
          />
          <p>
            Batman'da halı ve koltuk yıkamada ve yaşam alanı temizliğinde güvenilir çözüm.
            Telefonla veya WhatsApp üzerinden kolayca randevu alın.
          </p>
        </div>

        <nav className="footer-col" aria-label="Hizmetler">
          <h3>Hizmetlerimiz</h3>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/hizmetler/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Kurumsal">
          <h3>Kurumsal</h3>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hizmetler">Tüm Hizmetler</Link></li>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </nav>

        <div className="footer-col footer-contact">
          <h3>İletişim</h3>
          <a
            href={SITE.phoneHref}
            className="footer-contact-row"
            onClick={() => trackPhoneClick('footer')}
          >
            <Phone size={18} aria-hidden="true" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-row"
            onClick={() => trackWhatsAppClick('footer')}
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>WhatsApp ile yazın</span>
          </a>
          <p className="footer-contact-row footer-address">
            <MapPin size={18} aria-hidden="true" />
            <span>{SITE.address}</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Garanti Temizlik — Batman Halı ve Koltuk Yıkama. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
