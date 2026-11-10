import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileCtaBar from '../components/MobileCtaBar.jsx';
import { useScrollToTop } from '../hooks/useScrollToTop.js';

export default function MainLayout() {
  useScrollToTop();
  return (
    <>
      <a href="#main" className="skip-link">İçeriğe atla</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
