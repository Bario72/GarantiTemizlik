import { Quote, Star } from 'lucide-react';
import Reveal from './Reveal.jsx';

/**
 * Müşteri yorumları alanı — İSKELET.
 *
 * Henüz gerçek yorum eklenmediği için sahte yorum/puan ÜRETİLMEZ.
 * Gerçek müşteri yorumlarınızı aşağıdaki TESTIMONIALS dizisine ekleyin:
 *   { name: 'Ad Soyad', service: 'Halı Yıkama', text: '...', rating: 5 }
 * Dizi dolduğunda kartlar otomatik görünür; boşken davet mesajı gösterilir.
 */
const TESTIMONIALS = [];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) {
    return (
      <Reveal className="testimonial-empty">
        <Quote size={28} aria-hidden="true" />
        <p>
          Müşterilerimizin gerçek deneyimleri yakında bu alanda yayınlanacak.
          Hizmet aldıysanız görüşünüzü WhatsApp üzerinden bizimle paylaşabilirsiniz.
        </p>
      </Reveal>
    );
  }

  return (
    <div className="testimonial-grid">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name + i} className="testimonial-card" delay={i * 60}>
          <div className="testimonial-stars" aria-label={`${t.rating} yıldız`}>
            {Array.from({ length: t.rating }).map((_, s) => (
              <Star key={s} size={16} aria-hidden="true" />
            ))}
          </div>
          <p className="testimonial-text">"{t.text}"</p>
          <p className="testimonial-meta">
            <strong>{t.name}</strong>
            <span>{t.service}</span>
          </p>
        </Reveal>
      ))}
    </div>
  );
}
