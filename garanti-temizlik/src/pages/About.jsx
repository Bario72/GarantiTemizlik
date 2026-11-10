import { Droplets, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import { useSeo } from '../hooks/useSeo.js';

const PRINCIPLES = [
  {
    icon: Droplets,
    title: 'Temizlik anlayışımız',
    text: 'Temizlik bizim için yüzeyi parlatmak değil; lif diplerine inen, gözle görünmeyeni de arındıran bir iştir. Her üründe cinsine uygun yöntem ve ürün kullanır, "olmuş gibi" değil, gerçekten temiz teslim ederiz.',
  },
  {
    icon: HeartHandshake,
    title: 'Müşteri memnuniyeti yaklaşımımız',
    text: 'İşimizi teslim ederken birlikte kontrol ederiz. Gözden kaçan bir nokta varsa tartışmadan telafi ederiz; çünkü bir sonraki işimiz, bir önceki müşterimizin tavsiyesiyle gelir.',
  },
  {
    icon: ShieldCheck,
    title: 'Hijyen ve kalite anlayışımız',
    text: 'Kullandığımız şampuan ve ürünleri kumaş sağlığına ve ev ortamına uygunluğuna göre seçeriz. Bol su ile durulama ve tam kurutma, bizde pazarlık konusu olmayan standartlardır.',
  },
  {
    icon: Sparkles,
    title: 'Hizmet prensiplerimiz',
    text: 'Verdiğimiz randevu saatine uyarız, fiyatı baştan net söyleriz, evinize girerken işimize gösterdiğimiz özeni evinize de gösteririz. Söz verdiğimiz işi, söz verdiğimiz şekilde teslim ederiz.',
  },
];

export default function About() {
  useSeo({
    title: 'Hakkımızda | Garanti Temizlik – Batman Halı ve Koltuk Yıkama',
    description:
      "Garanti Temizlik'i tanıyın: Batman'da halı ve koltuk yıkamada ve yaşam alanı temizliğinde hijyen, kalite ve müşteri memnuniyeti odaklı hizmet anlayışımız.",
    path: '/hakkimizda',
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeader
            as="h1"
            title="Hakkımızda"
            lead="Garanti Temizlik, Batman'da halı ve koltuk yıkama ile yaşam alanı temizliği alanında hizmet veren yerel bir temizlik firmasıdır. İsmimizdeki 'garanti' kelimesi, işimizi teslim ederken arkasında durduğumuz sözün kendisidir."
          />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="about-grid">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} className="about-card" delay={i * 70}>
                  <span className="why-icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h2>{p.title}</h2>
                  <p>{p.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container container-narrow about-quote-wrap">
          <Reveal className="about-quote">
            <p>
              "Bir evin halısını yıkamak, o evin güvenini kazanmaktır. Biz her
              işte önce bu güveni, sonra halıyı yıkarız."
            </p>
            <span>— Garanti Temizlik ekibi</span>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Bizi daha yakından tanımak ister misiniz?"
        text="Telefonla arayın veya WhatsApp üzerinden yazın; hizmetlerimizi ve çalışma şeklimizi memnuniyetle anlatalım."
        location="about_cta_band"
      />
    </>
  );
}
