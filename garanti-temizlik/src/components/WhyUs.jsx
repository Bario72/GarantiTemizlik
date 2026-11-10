import { ShieldCheck, Sparkles, MapPin, HandCoins, Timer, HeartHandshake } from 'lucide-react';
import Reveal from './Reveal.jsx';

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Kumaş dostu temizlik',
    text: 'Halı ve döşeme cinsine uygun ürünler seçer, dokuyu yıpratmadan temizleriz.',
  },
  {
    icon: Sparkles,
    title: 'Derinlemesine hijyen',
    text: 'Yüzeysel değil; lif diplerine inen yıkama ve bol su ile durulama uygularız.',
  },
  {
    icon: MapPin,
    title: 'Batman geneli hizmet',
    text: 'Batman merkez ve çevresinde adresten alım ve yerinde uygulama yaparız.',
  },
  {
    icon: Timer,
    title: 'Hızlı ve planlı randevu',
    text: 'Telefonda netleşen randevu saatine uyar, işinizi zamanında teslim ederiz.',
  },
  {
    icon: HandCoins,
    title: 'Net fiyat bilgisi',
    text: 'İşlem öncesi fiyatı açıkça paylaşırız; sonradan sürpriz ücret çıkarmayız.',
  },
  {
    icon: HeartHandshake,
    title: 'Memnuniyet odaklı yaklaşım',
    text: 'Teslimde birlikte kontrol ederiz; gözden kaçan bir nokta varsa telafi ederiz.',
  },
];

export default function WhyUs() {
  return (
    <div className="why-grid">
      {ITEMS.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.title} className="why-card" delay={i * 60}>
            <span className="why-icon" aria-hidden="true">
              <Icon size={22} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
