import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';

/**
 * Erişilebilir SSS akordeonu (button + aria-expanded).
 */
export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <Reveal key={item.q} className="faq-item" delay={i * 50}>
            <h3 className="faq-q">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span>{item.q}</span>
                <ChevronDown size={20} className={`faq-chev ${open ? 'is-open' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`faq-a ${open ? 'is-open' : ''}`}
            >
              <p>{item.a}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
