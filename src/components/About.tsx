export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <p className="mono section-kicker reveal">About</p>
        <div className="about-copy">
          <p className="reveal">
            I started on the operations floor — nearly three years at <strong>TCS</strong> running retail-banking and
            custody processes, where I learned how banks actually move money: due diligence, maker–checker, MIS, and
            the thousand small controls behind every transaction.
          </p>
          <p className="reveal">
            An MBA in Finance later, I moved to the product side. At <strong>ICICI Bank's Business Loans Group</strong>{' '}
            I own the renewals portfolio and the machinery around it — building the portfolio waterfall, then working
            with DSAG and Policy to automate it end-to-end (yes, including UAT on the input files). I like the
            unglamorous middle of product work: getting policy, tech and business to agree on the same file format.
          </p>
          <p className="reveal">
            Off hours, my desk looks different — a Raspberry Pi home server, Python screeners for Indian equities, and
            small pipelines that stitch LLM APIs into daily workflows. The rule of the lab is simple:{' '}
            <strong>if a task repeats twice, it gets a script.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
