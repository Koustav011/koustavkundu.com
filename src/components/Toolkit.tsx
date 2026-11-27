import { EDUCATION, KITS } from '../data';
import { SectionHead } from './SectionHead';

/** Skills and credentials together: one region for "what I bring". */
export function Toolkit() {
  return (
    <section className="section" id="toolkit">
      <div className="wrap">
        <SectionHead title="Two desks, one operator." />
        <div className="kit-grid">
          {KITS.map((kit) => (
            <div className="kit reveal" key={kit.title}>
              <h3>{kit.title}</h3>
              <div className="chips">
                {kit.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="kit kit--edu reveal">
            <h3>Credentials</h3>
            <div className="edu-rows">
              {EDUCATION.map((e) => (
                <div className="edu-row" key={e.what}>
                  <span className="year">{e.year}</span>
                  <span>
                    <span className="what">{e.what}</span>
                    <span className="where">{e.where}</span>
                  </span>
                  <span className="meta">{e.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
