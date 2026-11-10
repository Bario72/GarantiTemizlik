import ServiceCard from '../components/ServiceCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { SERVICES } from '../data/services.js';
import { useSeo } from '../hooks/useSeo.js';

export default function Services() {
  useSeo({
    title: 'Hizmetlerimiz | Batman Halı ve Koltuk Yıkama – Garanti Temizlik',
    description:
      'Batman halı ve koltuk yıkama; araç koltuğu, yatak, battaniye, perde yıkama; kombi petek, klima ve ev temizliği. Tüm hizmetlerimizi inceleyin.',
    path: '/hizmetler',
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            as="h1"
            title="Hizmetlerimiz"
            lead="Batman'da halı ve koltuk yıkamadan klima ve petek temizliğine kadar 9 farklı alanda profesyonel hizmet veriyoruz. Her hizmetin detayına girerek kapsamı inceleyebilir, tek dokunuşla bilgi alabilirsiniz."
          />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?"
        text="Bizi arayın; ihtiyacınızı birlikte netleştirip size en uygun çözümü ve fiyat bilgisini paylaşalım."
        location="services_cta_band"
      />
    </>
  );
}
