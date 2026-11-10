import { PhoneCall, Truck, Droplets, PackageCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Arayın veya yazın',
    text: 'Telefonla ya da WhatsApp üzerinden ulaşın; ihtiyacınızı dinleyip randevunuzu planlayalım.',
  },
  {
    icon: Truck,
    title: 'Adresten teslim alalım',
    text: 'Halı ve tekstil ürünlerinizi adresinizden alırız; koltuk ve yatak gibi hizmetler yerinde uygulanır.',
  },
  {
    icon: Droplets,
    title: 'Derinlemesine yıkayalım',
    text: 'Ürün cinsine uygun şampuan ve makinelerle yıkayıp bol su ile durularız.',
  },
  {
    icon: PackageCheck,
    title: 'Tertemiz teslim edelim',
    text: 'Tam kuruyan ürünlerinizi özenle paketleyip adresinize teslim ederiz.',
  },
];

/** Halı ve koltuk yıkama süreci — gerçek bir sıralama olduğu için numaralıdır. */
export default function ProcessSteps() {
  return (
    <ol className="process-grid">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
          <Reveal as="li" key={step.title} className="process-step" delay={i * 70}>
            <span className="process-num" aria-hidden="true">{i + 1}</span>
            <span className="process-icon" aria-hidden="true">
              <Icon size={24} />
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        );
      })}
    </ol>
  );
}
