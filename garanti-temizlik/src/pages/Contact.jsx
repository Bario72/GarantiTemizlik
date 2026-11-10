import { useMemo } from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Reveal from '../components/Reveal.jsx';
import { CallButton, WhatsAppButton } from '../components/CtaButtons.jsx';
import { SITE, WHATSAPP_URL } from '../config/site.js';
import { useSeo } from '../hooks/useSeo.js';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking.js';

export default function Contact() {
  useSeo({
    title: 'İletişim | Garanti Temizlik Batman – 0543 219 77 72',
    description:
      "Garanti Temizlik iletişim: Telefon 0543 219 77 72, WhatsApp hattı ve adres: Kültür Mah. 2605 Sk. No: 45/B Batman. Hemen ulaşın, randevunuzu alın.",
    path: '/iletisim',
  });

  const mapsSrc = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`,
    []
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            as="h1"
            title="İletişim"
            lead="Randevu ve fiyat bilgisi için en hızlı yol telefon ya da WhatsApp. Dilerseniz formu doldurun, mesajınız doğrudan bize ulaşsın."
          />
          <Reveal className="contact-hero-ctas">
            <CallButton location="contact_page" size="lg" showNumber />
            <WhatsAppButton location="contact_page" size="lg" />
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container contact-grid">
          <div className="contact-info-col">
            <Reveal className="contact-info-card">
              <h2>İletişim bilgileri</h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-ico"><Phone size={20} aria-hidden="true" /></span>
                  <div>
                    <strong>Telefon</strong>
                    <a href={SITE.phoneHref} onClick={() => trackPhoneClick('contact_page')}>
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-ico"><MessageCircle size={20} aria-hidden="true" /></span>
                  <div>
                    <strong>WhatsApp</strong>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contact_page')}
                    >
                      Mesaj gönderin
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-ico"><MapPin size={20} aria-hidden="true" /></span>
                  <div>
                    <strong>Adres</strong>
                    <p>{SITE.address}</p>
                  </div>
                </li>
                <li>
                  <span className="contact-ico"><Clock size={20} aria-hidden="true" /></span>
                  <div>
                    <strong>Çalışma saatleri</strong>
                    <p>Telefon ve WhatsApp hattımız gün içinde aktiftir; arayın, uygun saati birlikte planlayalım.</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal className="contact-map" delay={100}>
              <iframe
                src={mapsSrc}
                title="Garanti Temizlik konumu — Google Haritalar"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal className="contact-form-col" delay={60}>
            <h2>Bize yazın</h2>
            <p className="contact-form-lead">
              Formu doldurun; mesajınız WhatsApp üzerinden bize iletilsin.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
