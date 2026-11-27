import { PROJECTS } from '../data';
import { SectionHead } from './SectionHead';

export function Lab() {
  return (
    <section className="section" id="lab">
      <div className="wrap">
        <SectionHead title="Things I build after the market closes." intro="Personal projects, built for fun, kept because they turned out useful. The rule of the lab: if a task repeats twice, it gets a script." />
        <div className="cards">
          {PROJECTS.map((p) => (
            <article className={`card${p.feature ? ' card--feature' : ''} reveal`} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <p className="tags">{p.tags.join(', ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
