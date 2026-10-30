import { KITS } from '../data';
import { SectionHead } from './SectionHead';

export function Toolkit() {
  return (
    <section className="section" id="toolkit" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead title="Two desks, one operator." />
        <div className="kits">
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
        </div>
      </div>
    </section>
  );
}
