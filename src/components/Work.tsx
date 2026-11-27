import { JOBS, WORK_INTRO } from '../data';
import { Rich } from './Rich';
import { SectionHead } from './SectionHead';

/** Current role fully open; earlier roles collapse to one line (native <details>, keyboard and screen-reader friendly). */
export function Work() {
  const [now, ...past] = JOBS;
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead title="Seven years in banking, four in lending." intro={WORK_INTRO} />
        <article className="job job--now reveal">
          <div className="job-top">
            <h3>{now.title}</h3>
            <span className="period">{now.period}</span>
          </div>
          <p className="org">{now.org}</p>
          <ul>
            {now.points.map((p) => (
              <li key={p}>
                <Rich text={p} />
              </li>
            ))}
          </ul>
        </article>
        <div className="past reveal">
          {past.map((job) => (
            <details className="past-job" key={job.title}>
              <summary>
                <span className="past-title">{job.title}</span>
                <span className="past-org">{job.org}</span>
                <span className="period">{job.period}</span>
              </summary>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
