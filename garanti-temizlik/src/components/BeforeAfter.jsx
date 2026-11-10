import { useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import Reveal from './Reveal.jsx';

/**
 * Öncesi / Sonrası karşılaştırma alanı.
 *
 * Şu an marka renklerinde temsili bir görsel kullanır. Gerçek fotoğraflar
 * hazır olduğunda "before" ve "after" katmanlarındaki SVG'leri aynı boyutlu
 * iki <img> ile değiştirmeniz yeterlidir (README.md "Görseller" bölümü).
 *
 * Kaydırıcı; fare, dokunma ve klavye (ok tuşları) ile kullanılabilir.
 */
export default function BeforeAfter() {
  const [pos, setPos] = useState(55);
  const trackRef = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  const onPointerDown = (e) => {
    dragging.current = true;
    trackRef.current.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4));
  };

  return (
    <Reveal className="ba-wrap">
      <div
        className="ba-track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* SONRASI (altta, tam genişlik) */}
        <div className="ba-layer ba-after" aria-hidden="true">
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="baAfter" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#0094C6" />
                <stop offset="1" stopColor="#005E7C" />
              </linearGradient>
            </defs>
            <rect width="600" height="340" fill="url(#baAfter)" />
            <rect x="60" y="60" width="480" height="220" rx="14" fill="none" stroke="#EAF6FB" strokeWidth="5" opacity="0.9" />
            <circle cx="300" cy="170" r="52" fill="none" stroke="#FFFFFF" strokeWidth="5" opacity="0.95" />
            <path d="M300 118v104M248 170h104" stroke="#EAF6FB" strokeWidth="3" opacity="0.7" />
            <text x="300" y="318" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontFamily="inherit" fontWeight="700">SONRASI</text>
          </svg>
        </div>

        {/* ÖNCESİ (üstte, clip-path ile daralır) */}
        <div
          className="ba-layer ba-before"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="340" fill="#40424f" />
            <rect x="60" y="60" width="480" height="220" rx="14" fill="none" stroke="#6b6d78" strokeWidth="5" />
            <circle cx="300" cy="170" r="52" fill="none" stroke="#7c7e88" strokeWidth="5" />
            <ellipse cx="210" cy="120" rx="46" ry="26" fill="#2f3039" opacity="0.9" />
            <ellipse cx="398" cy="226" rx="58" ry="30" fill="#30313a" opacity="0.9" />
            <ellipse cx="330" cy="100" rx="24" ry="14" fill="#343541" />
            <text x="300" y="318" textAnchor="middle" fill="#c9cad1" fontSize="22" fontFamily="inherit" fontWeight="700">ÖNCESİ</text>
          </svg>
        </div>

        {/* Kaydırıcı */}
        <div
          className="ba-handle"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Öncesi ve sonrası karşılaştırma kaydırıcısı"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
        >
          <span className="ba-handle-btn">
            <MoveHorizontal size={18} aria-hidden="true" />
          </span>
        </div>
      </div>
      <p className="ba-note">
        Temsili görseldir — gerçek öncesi/sonrası fotoğraflarınız bu alana eklenecek şekilde hazırlandı.
      </p>
    </Reveal>
  );
}
