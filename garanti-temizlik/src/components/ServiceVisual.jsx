/**
 * Her hizmet için marka renklerinde SVG illüstrasyon.
 * Gerçek fotoğraflar (WebP) hazır olduğunda bu bileşen yerine
 * <img> kullanmanız yeterlidir — README.md "Görseller" bölümüne bakın.
 *
 * SVG'ler vektörel olduğu için her ekranda keskindir ve ek ağ isteği
 * oluşturmaz (performans + CLS açısından avantaj).
 */

const C = {
  ink: '#000022',
  navy: '#001242',
  blue: '#0094C6',
  teal: '#005E7C',
  light: '#EAF6FB',
  white: '#FFFFFF',
};

function Droplets({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`} fill={C.blue} opacity="0.9">
      <path d="M8 0c4 6 7 9 7 13a7 7 0 1 1-14 0C1 9 4 6 8 0Z" />
      <path d="M26 10c2.6 4 4.6 6 4.6 8.6a4.6 4.6 0 1 1-9.2 0C21.4 16 23.4 14 26 10Z" opacity="0.65" />
    </g>
  );
}

function Sparkle({ x, y, s = 10, color = C.white, opacity = 1 }) {
  return (
    <path
      d={`M${x} ${y - s} q1.5 ${s - 1.5} ${s} ${s} q-${s - 1.5} 1.5 -${s} ${s} q-1.5 -${s - 1.5} -${s} -${s} q${s - 1.5} -1.5 ${s} -${s}Z`}
      fill={color}
      opacity={opacity}
    />
  );
}

const PICTOS = {
  carpet: (
    <g>
      <g transform="rotate(-6 150 95)">
        <rect x="35" y="55" width="230" height="86" rx="10" fill={C.teal} />
        <rect x="47" y="67" width="206" height="62" rx="6" fill={C.navy} />
        <rect x="63" y="81" width="174" height="34" rx="4" fill="none" stroke={C.blue} strokeWidth="3" />
        <circle cx="150" cy="98" r="11" fill={C.blue} />
        <path d="M150 80v36M132 98h36" stroke={C.navy} strokeWidth="3" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={44 + i * 31} y="137" width="10" height="12" rx="3" fill={C.teal} />
        ))}
      </g>
      <Droplets x={222} y={28} />
      <Sparkle x={58} y={42} s={9} color={C.blue} />
    </g>
  ),
  sofa: (
    <g>
      <rect x="52" y="48" width="196" height="64" rx="18" fill={C.teal} />
      <rect x="34" y="88" width="232" height="52" rx="16" fill={C.blue} />
      <rect x="34" y="88" width="38" height="52" rx="14" fill={C.teal} />
      <rect x="228" y="88" width="38" height="52" rx="14" fill={C.teal} />
      <rect x="78" y="94" width="68" height="34" rx="9" fill={C.light} />
      <rect x="152" y="94" width="68" height="34" rx="9" fill={C.light} />
      <rect x="58" y="140" width="14" height="18" rx="4" fill={C.navy} />
      <rect x="228" y="140" width="14" height="18" rx="4" fill={C.navy} />
      <Droplets x={238} y={22} />
      <Sparkle x={52} y={34} s={10} color={C.blue} />
      <Sparkle x={162} y={70} s={6} color={C.white} opacity={0.9} />
    </g>
  ),
  carseat: (
    <g>
      <path d="M118 36c-12 0-20 9-20 22l6 56c1 10 8 16 18 16h58c10 0 17-6 18-16l6-56c0-13-8-22-20-22h-66Z" fill={C.teal} />
      <rect x="106" y="124" width="90" height="34" rx="12" fill={C.blue} />
      <rect x="118" y="52" width="66" height="10" rx="5" fill={C.light} opacity="0.85" />
      <rect x="118" y="70" width="66" height="10" rx="5" fill={C.light} opacity="0.65" />
      <rect x="118" y="88" width="66" height="10" rx="5" fill={C.light} opacity="0.45" />
      <circle cx="68" cy="120" r="26" fill="none" stroke={C.blue} strokeWidth="8" />
      <circle cx="68" cy="120" r="6" fill={C.blue} />
      <Droplets x={214} y={26} />
      <Sparkle x={246} y={120} s={8} color={C.blue} />
    </g>
  ),
  bed: (
    <g>
      <rect x="36" y="58" width="24" height="84" rx="8" fill={C.teal} />
      <rect x="36" y="96" width="228" height="42" rx="12" fill={C.blue} />
      <rect x="36" y="88" width="228" height="16" rx="8" fill={C.light} />
      <rect x="64" y="66" width="58" height="24" rx="10" fill={C.white} />
      <rect x="130" y="66" width="58" height="24" rx="10" fill={C.white} opacity="0.85" />
      <rect x="40" y="138" width="12" height="18" rx="4" fill={C.navy} />
      <rect x="248" y="138" width="12" height="18" rx="4" fill={C.navy} />
      <Droplets x={224} y={26} />
      <Sparkle x={210} y={64} s={7} color={C.blue} />
    </g>
  ),
  blanket: (
    <g>
      <path d="M58 66c0-14 10-24 24-24h136c14 0 24 10 24 24v56c0 14-10 24-24 24H82c-14 0-24-10-24-24V66Z" fill={C.teal} />
      <path d="M58 98h184" stroke={C.navy} strokeWidth="8" />
      <path d="M58 70h184M58 126h184" stroke={C.blue} strokeWidth="5" opacity="0.8" />
      <path d="M242 42c12 18 12 86 0 104" stroke={C.light} strokeWidth="7" fill="none" strokeLinecap="round" />
      <Droplets x={66} y={20} />
      <Sparkle x={236} y={30} s={8} color={C.blue} />
    </g>
  ),
  curtain: (
    <g>
      <rect x="54" y="34" width="192" height="14" rx="7" fill={C.navy} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={62 + i * 36}
          y="48"
          width="28"
          height={96 - (i % 2) * 14}
          rx="10"
          fill={i % 2 ? C.blue : C.teal}
        />
      ))}
      <rect x="54" y="150" width="192" height="8" rx="4" fill={C.light} opacity="0.6" />
      <Droplets x={226} y={52} />
      <Sparkle x={66} y={162} s={7} color={C.blue} />
    </g>
  ),
  radiator: (
    <g>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={60 + i * 27} y="52" width="18" height="92" rx="9" fill={i % 2 ? C.teal : C.blue} />
      ))}
      <rect x="52" y="64" width="198" height="10" rx="5" fill={C.navy} />
      <rect x="52" y="122" width="198" height="10" rx="5" fill={C.navy} />
      <path d="M120 24c3 7 6 9 6 13a6 6 0 1 1-12 0c0-4 3-6 6-13Z" fill={C.light} />
      <path d="M160 18c3 7 6 9 6 13a6 6 0 1 1-12 0c0-4 3-6 6-13Z" fill={C.light} opacity="0.8" />
      <Sparkle x={236} y={34} s={8} color={C.blue} />
    </g>
  ),
  ac: (
    <g>
      <rect x="46" y="48" width="208" height="64" rx="18" fill={C.light} />
      <rect x="46" y="48" width="208" height="30" rx="15" fill={C.white} />
      <rect x="62" y="92" width="150" height="8" rx="4" fill={C.teal} />
      <circle cx="232" cy="96" r="7" fill={C.blue} />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${92 + i * 48} 124c10 8 2 16 12 24`}
          stroke={C.blue}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity={0.9 - i * 0.2}
        />
      ))}
      <Sparkle x={250} y={34} s={8} color={C.blue} />
      <Sparkle x={58} y={132} s={6} color={C.teal} />
    </g>
  ),
  house: (
    <g>
      <path d="M150 32 58 96h26v62h132V96h26L150 32Z" fill={C.teal} />
      <path d="M150 32 58 96h26l66-46 66 46h26L150 32Z" fill={C.navy} />
      <rect x="128" y="112" width="44" height="46" rx="6" fill={C.blue} />
      <rect x="98" y="108" width="20" height="20" rx="4" fill={C.light} />
      <rect x="182" y="108" width="20" height="20" rx="4" fill={C.light} />
      <Droplets x={222} y={28} />
      <Sparkle x={70} y={44} s={8} color={C.blue} />
    </g>
  ),
};

export default function ServiceVisual({ variant = 'carpet', title = '', className = '' }) {
  return (
    <svg
      viewBox="0 0 300 180"
      role="img"
      aria-label={title ? `${title} illüstrasyonu` : 'Hizmet illüstrasyonu'}
      className={`service-visual ${className}`}
    >
      <defs>
        <linearGradient id={`sv-bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.navy} />
          <stop offset="1" stopColor={C.ink} />
        </linearGradient>
      </defs>
      <rect width="300" height="180" fill={`url(#sv-bg-${variant})`} />
      <circle cx="268" cy="-10" r="70" fill={C.blue} opacity="0.12" />
      <circle cx="18" cy="190" r="64" fill={C.teal} opacity="0.18" />
      {PICTOS[variant] || PICTOS.carpet}
    </svg>
  );
}
