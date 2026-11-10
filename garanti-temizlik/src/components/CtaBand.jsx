import { CallButton, WhatsAppButton } from './CtaButtons.jsx';
import Reveal from './Reveal.jsx';

/**
 * Sayfa sonlarında kullanılan güçlü iletişim çağrısı bandı.
 */
export default function CtaBand({
  title = 'Halınız ve koltuğunuz ilk günkü ferahlığına kavuşsun',
  text = 'Batman içi randevu için hemen arayın veya WhatsApp üzerinden yazın; size en uygun günü birlikte planlayalım.',
  location = 'cta_band',
  serviceSlug,
  serviceTitle,
}) {
  return (
    <section className="cta-band" aria-label="İletişim çağrısı">
      <div className="container">
        <Reveal className="cta-band-inner">
          <div className="cta-band-copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-band-actions">
            <CallButton location={location} serviceSlug={serviceSlug} size="lg" showNumber />
            <WhatsAppButton
              location={location}
              serviceSlug={serviceSlug}
              serviceTitle={serviceTitle}
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
