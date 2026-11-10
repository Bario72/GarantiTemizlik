import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ServiceVisual from './ServiceVisual.jsx';
import { CallButton, WhatsAppButton } from './CtaButtons.jsx';
import Reveal from './Reveal.jsx';

/**
 * Hizmet kartı: görsel + başlık + açıklama + iletişim butonları.
 * Kart başlığı detay sayfasına gider; butonlar doğrudan dönüşüme.
 */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal as="article" className="service-card" delay={Math.min(index * 60, 240)}>
      <Link
        to={`/hizmetler/${service.slug}`}
        className="service-card-media"
        aria-label={`${service.title} detaylarını incele`}
        tabIndex={-1}
      >
        <ServiceVisual variant={service.visual} title={service.title} />
      </Link>

      <div className="service-card-body">
        <h3 className="service-card-title">
          <Link to={`/hizmetler/${service.slug}`}>
            {service.title}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </h3>
        <p className="service-card-text">{service.short}</p>

        <div className="service-card-ctas">
          <CallButton
            location="service_card"
            serviceSlug={service.slug}
            size="sm"
            label="Hemen Ara"
          />
          <WhatsAppButton
            location="service_card"
            serviceSlug={service.slug}
            serviceTitle={service.title}
            size="sm"
            label="WhatsApp"
          />
        </div>
      </div>
    </Reveal>
  );
}
