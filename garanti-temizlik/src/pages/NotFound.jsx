import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { useSeo } from '../hooks/useSeo.js';
import { CallButton } from '../components/CtaButtons.jsx';

export default function NotFound() {
  useSeo({
    title: 'Sayfa Bulunamadı | Garanti Temizlik',
    description: 'Aradığınız sayfa bulunamadı. Garanti Temizlik ana sayfasına dönün.',
    path: '/404',
  });

  return (
    <section className="section section-light notfound">
      <div className="container container-narrow">
        <p className="notfound-code">404</p>
        <h1>Aradığınız sayfa bulunamadı</h1>
        <p>
          Sayfa taşınmış veya adres yanlış yazılmış olabilir. Ana sayfadan devam
          edebilir ya da bizi doğrudan arayabilirsiniz.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-solid btn-md">
            <Home size={18} aria-hidden="true" />
            <span>Ana Sayfa</span>
          </Link>
          <Link to="/hizmetler" className="btn btn-outline btn-md">
            <span>Hizmetlerimiz</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <CallButton location="notfound" size="md" showNumber />
        </div>
      </div>
    </section>
  );
}
