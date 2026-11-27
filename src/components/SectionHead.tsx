export function SectionHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="section-head">
      <h2 className="reveal">{title}</h2>
      {intro && <p className="section-intro reveal">{intro}</p>}
    </div>
  );
}
