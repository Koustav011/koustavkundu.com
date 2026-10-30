import { EDUCATION } from '../data';
import { SectionHead } from './SectionHead';

export function Education() {
  return (
    <section className="section" id="education" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead title="Credentials on file." />
        <div className="edu-rows reveal">
          {EDUCATION.map((e) => (
            <div className="edu-row" key={e.what}>
              <span className="year">{e.year}</span>
              <span>
                <span className="what">{e.what}</span>
                <br />
                <span className="where">{e.where}</span>
              </span>
              <span className="meta">{e.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
