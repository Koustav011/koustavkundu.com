export function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="section-head">
      <p className="mono section-kicker reveal">{kicker}</p>
      <h2 className="reveal">{title}</h2>
    </div>
  );
}
