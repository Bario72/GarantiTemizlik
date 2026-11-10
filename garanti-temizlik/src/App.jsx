import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';

// Rota bazlı code splitting: ana sayfa ilk pakette, diğerleri gerektiğinde yüklenir.
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function PageFallback() {
  return <div className="page-fallback" role="status" aria-label="Sayfa yükleniyor" />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="hizmetler"
          element={
            <Suspense fallback={<PageFallback />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="hizmetler/:slug"
          element={
            <Suspense fallback={<PageFallback />}>
              <ServiceDetail />
            </Suspense>
          }
        />
        <Route
          path="hakkimizda"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="iletisim"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
