import { useState } from 'react';
import { CAREER, type BarKind } from '../data';

const barClass: Record<BarKind, string> = {
  solid: 'bar',
  outline: 'bar bar--outline',
  accent: 'bar bar--accent',
  next: 'bar bar--next',
};

/**
 * Career waterfall: column width = years in role, bar height = scope.
 * Each column is a button; the chosen stage is described in the caption below
 * (works on touch, unlike a hover tooltip). ICICI is selected by default.
 */
export function CareerChart() {
  const [sel, setSel] = useState(3);
  const s = CAREER[sel];
  return (
    <div className="chart hero-rise">
      <div className="chart-frame">
        <div className="chart-title">
          <span className="label">Career so far</span>
          <span className="label chart-hint">Choose a bar</span>
        </div>
        <div className="bars" role="tablist" aria-label="Career stages">
          {CAREER.map((c, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={i === sel}
              aria-controls="stage-caption"
              className={`col${i === sel ? ' is-on' : ''}`}
              style={{ flexGrow: c.grow }}
              onClick={() => setSel(i)}
              key={c.role}
            >
              <span className={barClass[c.kind]} style={{ '--h': `${c.h}%` } as React.CSSProperties} />
              <span className="col-label">
                {c.label[0]}
                <br />
                {c.label[1]}
              </span>
            </button>
          ))}
        </div>
        <div className="stage" id="stage-caption" role="tabpanel" aria-live="polite">
          <p className="stage-role">{s.role}</p>
          <p className="stage-where">
            {s.where}
            {s.when && <span>, {s.when}</span>}
          </p>
          <p className="stage-line">{s.line}</p>
        </div>
        <p className="label chart-caption">Bar width is time in the role, height is scope.</p>
      </div>
    </div>
  );
}
