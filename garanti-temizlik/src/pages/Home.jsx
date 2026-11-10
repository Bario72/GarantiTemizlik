import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import WhyUs from '../components/WhyUs.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import { SERVICES } from '../data/services.js';
import { SITE, WHATSAPP_URL } from '../config/site.js';
import { useSeo } from '../hooks/useSeo.js';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking.js';

const HOME_FAQ = [
  {
    q: 'Batman içinde hangi bölgelere hizmet veriyorsunuz?',
    a: 'Batman merkez ve çevresine hizmet veriyoruz. Adresinizi telefonda veya WhatsApp üzerinden ilettiğinizde randevunuzu hemen planlayabiliriz.',
  },
  {
    q: 'Halılarımı evden alıyor musunuz?',
    a: 'Evet. Halı, battaniye ve yorgan gibi ürünler adresinizden teslim alınır; yıkama ve kurutma sonrası tekrar adresinize teslim edilir.',
  },
  {
    q: 'Koltuk ve yatak temizliği evde mi yapılıyor?',
    a: 'Evet. Koltuk, yatak ve araç koltuğu temizliği adresinizde (yerinde) uygulanır; uygulama sonrası kısa sürede kullanıma hazır olur.',
  },
  {
    q: 'Fiyat bilgisini nasıl alabilirim?',
    a: 'Telefonla aradığınızda ya da WhatsApp üzerinden ürün türü ve ölçü bilgisini ilettiğinizde net fiyat bilgisi verilir.',
  },
  {
    q: 'Randevuyu nasıl oluşturabilirim?',
    a: `En hızlı yol ${SITE.phoneDisplay} numarasını aramak veya WhatsApp'tan yazmaktır; size uygun gün ve saat birlikte belirlenir.`,
  },
];

export default function Home() {
  useSeo({
    title: 'Batman Halı ve Koltuk Yıkama | Garanti Temizlik',
    description:
      "Garanti Temizlik: Batman'da profesyonel halı ve koltuk yıkama; yatak, perde, klima ve kombi petek temizliği. Hemen arayın: 0543 219 77 72.",
    path: '/',
  });

  const mapsSrc = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`,
    []
  );

  return (
    <>
      <Hero />

      {/* HİZMETLER */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head-row">
            <SectionHeader
              title="Hizmetlerimiz"
              lead="Halıdan koltuğa, yataktan klimanıza kadar yaşam alanınızın tamamı için Batman'da profesyonel temizlik."
            />
            <Reveal className="section-head-link">
              <Link to="/hizmetler" className="link-arrow">
                Tüm hizmetleri gör
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="services-grid">
            {SERVICES.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <Reveal className="services-more">
            <Link to="/hizmetler" className="btn btn-outline btn-md">
              <span>9 hizmetin tamamını incele</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NEDEN GARANTİ TEMİZLİK */}
      <section className="section section-navy">
        <div className="container">
          <SectionHeader
            title="Neden Garanti Temizlik?"
            lead="İsmimizdeki 'garanti' bir slogan değil; işimizi teslim ederken verdiğimiz sözdür."
          />
          <WhyUs />
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="section section-light">
        <div className="container">
          <SectionHeader
            title="Halı ve koltuk yıkama sürecimiz"
            lead="Randevudan teslime kadar her adım planlı ilerler; siz sadece arayın, gerisini biz üstlenelim."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* ÖNCESİ / SONRASI */}
      <section className="section section-tint">
        <div className="container">
          <SectionHeader
            title="Öncesi ve sonrası"
            lead="Fark, kaydırıcıyı hareket ettirdiğinizde ortaya çıkar. Gerçek uygulama fotoğraflarımız bu alanda yayınlanacak."
          />
          <BeforeAfter />
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="section section-light">
        <div className="container">
          <SectionHeader
            title="Müşterilerimiz ne diyor?"
            lead="Bizim için en değerli referans, işini teslim ettiğimiz komşularımızın sözleridir."
          />
          <Testimonials />
        </div>
      </section>

      {/* SSS */}
      <section className="section section-tint">
        <div className="container container-narrow">
          <SectionHeader
            title="Sıkça sorulan sorular"
            lead="Aklınıza takılan başka bir soru varsa telefonla veya WhatsApp üzerinden anında yanıtlayalım."
          />
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      {/* İLETİŞİM + HARİTA */}
      <section className="section section-light">
        <div className="container">
          <SectionHeader
            title="Bize ulaşın"
            lead="Batman'ın merkezindeyiz; telefonla, WhatsApp ile veya dükkânımıza uğrayarak ulaşabilirsiniz."
          />
          <div className="home-contact-grid">
            <Reveal className="home-contact-card">
              <ul className="contact-list">
                <li>
                  <span className="contact-ico"><Phone size={20} aria-hidden="true" /></span>
                  <div>
                    <strong>Telefon</strong>
                    <a href={SITE.phoneHref} onClick={() => trackPhoneClick('home_contact')}>
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
                      onClick={() => trackWhatsAppClick('home_contact')}
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
              </ul>
              <div className="home-contact-ctas">
                <Link to="/iletisim" className="link-arrow">
                  İletişim sayfasına git
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Reveal className="home-map" delay={100}>
              <iframe
                src={mapsSrc}
                title="Garanti Temizlik konumu — Google Haritalar"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand location="home_cta_band" />
    </>
  );
}
