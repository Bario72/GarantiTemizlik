import { useEffect, useRef } from 'react';

/**
 * HERO 3D SAHNE — "Temiz koltuk" deneyimi
 *
 * Yaklaşım: Three.js yerine katmanlı CSS 3D (perspective + translateZ)
 * kullanıldı. Nedenleri:
 *  - 0 ek bağımlılık, ~0 KB JS kütüphanesi → Lighthouse Performance hedefi
 *  - Mobilde GPU dostu (yalnızca transform/opacity anime edilir)
 *  - prefers-reduced-motion ve dokunmatik cihazlarda otomatik sadeleşir
 *
 * Katmanlar (arkadan öne):
 *  z0: ışık halkası ve su halkaları
 *  z1: halı düzlemi (rotateX ile zemine yatırılmış)
 *  z2: koltuk
 *  z3: su damlaları + köpük baloncukları
 *  z4: parlama süpürmesi (temizlik hissi)
 *
 * Fare hareketi rAF ile sahne rotasyonuna yumuşakça aktarılır; dokunmatik
 * cihazlarda yalnızca hafif otomatik salınım çalışır.
 */
export default function Hero3D() {
  const stageRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const scene = sceneRef.current;
    if (!stage || !scene) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduced || !canHover) return; // mobil/dokunmatik: yalnızca CSS float animasyonu

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      scene.style.transform = `rotateX(${curX.toFixed(2)}deg) rotateY(${curY.toFixed(2)}deg)`;
      if (Math.abs(curX - targetX) > 0.05 || Math.abs(curY - targetY) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
      const ny = (e.clientY - r.top) / r.height - 0.5;
      targetY = nx * 14; // rotateY
      targetX = -ny * 10; // rotateX
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);
    return () => {
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero3d-stage" ref={stageRef} aria-hidden="true">
      <div className="hero3d-float">
        <div className="hero3d-scene" ref={sceneRef}>
          {/* z0 — ışık ve su halkaları */}
          <div className="h3d-layer h3d-glow" />
          <div className="h3d-layer h3d-ring h3d-ring-1" />
          <div className="h3d-layer h3d-ring h3d-ring-2" />

          {/* z1 — halı düzlemi */}
          <div className="h3d-layer h3d-carpet">
            <svg viewBox="0 0 420 240" className="h3d-carpet-svg">
              <defs>
                <linearGradient id="h3dCarpet" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#005E7C" />
                  <stop offset="1" stopColor="#003A52" />
                </linearGradient>
              </defs>
              <rect x="6" y="6" width="408" height="228" rx="18" fill="url(#h3dCarpet)" />
              <rect x="26" y="26" width="368" height="188" rx="12" fill="none" stroke="#0094C6" strokeWidth="4" opacity="0.8" />
              <rect x="52" y="52" width="316" height="136" rx="8" fill="none" stroke="#EAF6FB" strokeWidth="2" opacity="0.35" />
              <circle cx="210" cy="120" r="34" fill="none" stroke="#0094C6" strokeWidth="4" opacity="0.9" />
              <path d="M210 86v68M176 120h68" stroke="#EAF6FB" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>

          {/* z2 — koltuk */}
          <div className="h3d-layer h3d-sofa">
            <svg viewBox="0 0 320 210" className="h3d-sofa-svg">
              <defs>
                <linearGradient id="h3dSeat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#15BDF2" />
                  <stop offset="1" stopColor="#0094C6" />
                </linearGradient>
                <linearGradient id="h3dBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0094C6" />
                  <stop offset="1" stopColor="#005E7C" />
                </linearGradient>
              </defs>
              {/* gölge */}
              <ellipse cx="160" cy="196" rx="128" ry="16" fill="#000022" opacity="0.45" />
              {/* sırt */}
              <rect x="58" y="22" width="204" height="86" rx="26" fill="url(#h3dBody)" />
              <rect x="58" y="22" width="204" height="86" rx="26" fill="#FFFFFF" opacity="0.06" />
              {/* kollar */}
              <rect x="30" y="78" width="52" height="92" rx="20" fill="url(#h3dBody)" />
              <rect x="238" y="78" width="52" height="92" rx="20" fill="url(#h3dBody)" />
              {/* oturma minderleri */}
              <rect x="74" y="96" width="86" height="52" rx="14" fill="url(#h3dSeat)" />
              <rect x="162" y="96" width="86" height="52" rx="14" fill="url(#h3dSeat)" />
              <path d="M80 110h74M168 110h74" stroke="#EAF6FB" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              {/* gövde alt */}
              <rect x="44" y="146" width="232" height="34" rx="14" fill="#005E7C" />
              {/* ayaklar */}
              <rect x="58" y="178" width="14" height="16" rx="4" fill="#001242" />
              <rect x="248" y="178" width="14" height="16" rx="4" fill="#001242" />
              {/* dikiş vurguları */}
              <path d="M70 64c30-18 150-18 180 0" stroke="#EAF6FB" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round" />
            </svg>
            {/* z4 — parlama süpürmesi */}
            <span className="h3d-shine" />
          </div>

          {/* z3 — damlalar ve baloncuklar */}
          <div className="h3d-layer h3d-drops">
            <span className="h3d-drop h3d-drop-1" />
            <span className="h3d-drop h3d-drop-2" />
            <span className="h3d-drop h3d-drop-3" />
            <span className="h3d-bubble h3d-bubble-1" />
            <span className="h3d-bubble h3d-bubble-2" />
            <span className="h3d-bubble h3d-bubble-3" />
            <span className="h3d-bubble h3d-bubble-4" />
            <span className="h3d-sparkle h3d-sparkle-1">✦</span>
            <span className="h3d-sparkle h3d-sparkle-2">✦</span>
          </div>
        </div>
      </div>

      {/* Sahne altı rozet */}
      <div className="hero3d-caption">
        <span className="hero3d-caption-dot" />
        Derinlemesine temizlik, yerinde hizmet
      </div>
    </div>
  );
}
