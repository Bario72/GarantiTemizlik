import { MapPin, ShieldCheck, Clock } from 'lucide-react';
import { CallButton, WhatsAppButton } from './CtaButtons.jsx';
import Hero3D from './Hero3D.jsx';
import { SITE } from '../config/site.js';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-bg-orb hero-bg-orb-1" />
        <span className="hero-bg-orb hero-bg-orb-2" />
        <span className="hero-bg-wave" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-location">
            <MapPin size={16} aria-hidden="true" />
            Batman geneli yerinde hizmet
          </p>

          <h1 id="hero-title" className="hero-title">
            Temizliğin Güvencesi,
            <br />
            Garanti Temizlik!
          </h1>

          <p className="hero-sub">
            Batman'da profesyonel halı ve koltuk yıkama başta olmak üzere tüm
            yaşam alanı temizliği hizmetleriyle hijyeni evinize getiriyoruz.
            Telefonla veya WhatsApp üzerinden dakikalar içinde randevunuzu alın.
          </p>

          <div className="hero-ctas">
            <CallButton location="hero" size="lg" showNumber />
            <WhatsAppButton location="hero" size="lg" />
          </div>

          <ul className="hero-chips">
            <li>
              <ShieldCheck size={16} aria-hidden="true" />
              Kumaşa uygun ürünler
            </li>
            <li>
              <Clock size={16} aria-hidden="true" />
              Hızlı randevu
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              {SITE.city} içi hizmet
            </li>
          </ul>
        </div>

        <Hero3D />
      </div>
    </section>
  );
}
