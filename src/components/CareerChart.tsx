import { CAREER, type BarKind } from '../data';

const barClass: Record<BarKind, string> = {
  solid: 'bar',
  outline: 'bar bar--outline',
  accent: 'bar bar--accent',
  next: 'bar bar--next',
};

/** Career waterfall: column width = years in role, bar height = scope. Pure CSS; GSAP grows the bars in Hero. */
export function CareerChart() {
  return (
    <div className="chart hero-rise" aria-label="Career waterfall chart">
      <div className="chart-frame">
        <div className="chart-title">
          <span className="mono">Career · Waterfall view</span>
          <span className="mono">2016 → today ▲</span>
        </div>
        <div className="bars">
          {CAREER.map((c) => (
            <div className="col" style={{ flexGrow: c.grow }} tabIndex={0} key={c.tip}>
              <span className="tip">{c.tip}</span>
              <div className={barClass[c.kind]} style={{ '--h': `${c.h}%` } as React.CSSProperties} />
              <span className="col-label">
                {c.label[0]}
                <br />
                {c.label[1]}
              </span>
            </div>
          ))}
        </div>
        <p className="mono chart-caption">width = time · height = scope</p>
      </div>
    </div>
  );
}
