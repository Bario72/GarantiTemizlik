import Reveal from './Reveal.jsx';

/** Bölüm başlığı: başlık + kısa açıklama. */
export default function SectionHeader({ title, lead, align = 'left', as: Heading = 'h2' }) {
  return (
    <Reveal className={`section-header align-${align}`}>
      <Heading className="section-title">{title}</Heading>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </Reveal>
  );
}
