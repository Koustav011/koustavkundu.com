import { PROJECTS } from '../data';
import { SectionHead } from './SectionHead';

export function Lab() {
  return (
    <section className="section" id="lab" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead kicker="The lab" title="Things I build after the market closes." />
        <p className="lab-note reveal">Personal projects — built for fun, kept because they turned out useful.</p>
        <div className="cards">
          {PROJECTS.map((p) => (
            <article className="card reveal" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
