import { useEffect, useRef } from 'react';

/**
 * Scroll ile görünür olduğunda .is-visible sınıfı ekler.
 * prefers-reduced-motion aktifse animasyonsuz, doğrudan görünür bırakır.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
