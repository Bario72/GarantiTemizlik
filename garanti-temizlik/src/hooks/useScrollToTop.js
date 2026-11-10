import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Rota değişiminde sayfayı en üste alır. */
export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
