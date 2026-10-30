export function SectionHead({ title }: { title: string }) {
  return (
    <div className="section-head">
      <h2 className="reveal">{title}</h2>
    </div>
  );
}
