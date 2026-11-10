import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import ServiceVisual from '../components/ServiceVisual.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import { CallButton, WhatsAppButton } from '../components/CtaButtons.jsx';
import { SERVICES, getServiceBySlug } from '../data/services.js';
import { SITE } from '../config/site.js';
import { useSeo } from '../hooks/useSeo.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Service Schema (JSON-LD) — her hizmet sayfasına özel
  const jsonLd = useMemo(() => {
    if (!service) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} – Batman`,
      description: service.short,
      serviceType: service.title,
      areaServed: { '@type': 'City', name: 'Batman' },
      provider: {
        '@type': 'LocalBusiness',
        name: SITE.name,
        telephone: '+905432197772',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kültür Mah. 2605 Sk. No: 45/B',
          addressLocality: 'Batman',
          addressCountry: 'TR',
        },
      },
      url: `${SITE.url}/hizmetler/${service.slug}`,
    };
  }, [service]);

  useSeo(
    service
      ? {
          title: service.seoTitle,
          description: service.seoDesc,
          path: `/hizmetler/${service.slug}`,
          jsonLd,
        }
      : {
          title: 'Hizmet Bulunamadı | Garanti Temizlik',
          description: 'Aradığınız hizmet sayfası bulunamadı.',
          path: '/hizmetler',
        }
  );

  if (!service) return <Navigate to="/hizmetler" replace />;

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="page-hero service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <nav className="breadcrumbs" aria-label="Sayfa yolu">
              <Link to="/">Ana Sayfa</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link to="/hizmetler">Hizmetlerimiz</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{service.title}</span>
            </nav>
            <h1 className="section-title">
              Batman {service.title}
            </h1>
            <p className="section-lead">{service.intro}</p>
            <div className="service-hero-ctas">
              <CallButton
                location="service_detail"
                serviceSlug={service.slug}
                size="lg"
                showNumber
              />
              <WhatsAppButton
                location="service_detail"
                serviceSlug={service.slug}
                serviceTitle={service.title}
                size="lg"
              />
            </div>
          </div>
          <Reveal className="service-hero-media" delay={80}>
            <ServiceVisual variant={service.visual} title={service.title} />
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container service-detail-grid">
          <div>
            <SectionHeader
              title="Bu hizmet neleri kapsar?"
              lead={`${service.title} hizmetimizde uygulanan başlıca adımlar ve kapsam:`}
            />
            <ul className="scope-list">
              {service.scope.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="service-side-card" delay={120}>
            <h3>Hızlı bilgi alın</h3>
            <p>
              {service.title} için fiyat ve randevu bilgisi almak çok kolay:
              arayın ya da WhatsApp'tan yazın, dakikalar içinde yanıtlayalım.
            </p>
            <CallButton
              location="service_detail_side"
              serviceSlug={service.slug}
              size="md"
              showNumber
            />
            <WhatsAppButton
              location="service_detail_side"
              serviceSlug={service.slug}
              serviceTitle={service.title}
              size="md"
            />
            <p className="service-side-note">{SITE.address}</p>
          </Reveal>
        </div>
      </section>

      {service.faq?.length > 0 && (
        <section className="section section-tint">
          <div className="container container-narrow">
            <SectionHeader
              title={`${service.title} hakkında sık sorulanlar`}
            />
            <Faq items={service.faq} />
          </div>
        </section>
      )}

      <section className="section section-light">
        <div className="container">
          <SectionHeader title="Diğer hizmetlerimiz" />
          <div className="related-grid">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link to={`/hizmetler/${s.slug}`} className="related-card">
                  <ServiceVisual variant={s.visual} title={s.title} />
                  <span className="related-title">
                    {s.title}
                    <ChevronRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`${service.title} için hemen randevu alın`}
        text="Telefonla arayın veya WhatsApp üzerinden yazın; size en uygun gün ve saati birlikte planlayalım."
        location="service_detail_band"
        serviceSlug={service.slug}
        serviceTitle={service.title}
      />
    </>
  );
}
