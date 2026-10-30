import { JOBS } from '../data';
import { Rich } from './Rich';
import { SectionHead } from './SectionHead';

export function Work() {
  return (
    <section className="section" id="work" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead title="Seven years in banking, four in lending." />
        <div className="jobs">
          {JOBS.map((job) => (
            <article className={`job${job.now ? ' job--now' : ''} reveal`} key={job.title}>
              <div className="job-top">
                <h3>{job.title}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p className="org">{job.org}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>
                    <Rich text={point} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
