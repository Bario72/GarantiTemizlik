import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '../config/site.js';
import { trackPhoneClick } from '../utils/tracking.js';
import { CallButton, WhatsAppButton } from './CtaButtons.jsx';

const NAV = [
  { to: '/', label: 'Ana Sayfa', end: true },
  { to: '/hizmetler', label: 'Hizmetlerimiz' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Rota değişince mobil menüyü kapat
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menü açıkken arka plan kaymasını engelle
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Garanti Temizlik ana sayfa">
          <img
            src="/logo-garanti-temizlik-beyaz.png"
            alt="Garanti Temizlik – Halı ve Koltuk Yıkama logosu"
            width="52"
            height="45"
            className="brand-logo"
          />
          <span className="brand-text">
            <strong>Garanti Temizlik</strong>
            <small>Halı &amp; Koltuk Yıkama</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Ana menü">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={SITE.phoneHref}
            className="header-phone"
            onClick={() => trackPhoneClick('header')}
            aria-label={`Telefonla ara: ${SITE.phoneDisplay}`}
          >
            <span className="header-phone-icon" aria-hidden="true">
              <Phone size={17} />
            </span>
            <span className="header-phone-text">
              <small>Hemen Arayın</small>
              <strong>{SITE.phoneDisplay}</strong>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobil menü" className="mobile-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-ctas">
          <CallButton location="header" size="lg" showNumber />
          <WhatsAppButton location="header" size="lg" />
        </div>
      </div>
    </header>
  );
}
