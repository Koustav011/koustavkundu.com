import { useRef } from 'react';
import { EMAIL, LINKEDIN } from '../data';
import { gsap, useGSAP, prefersReducedMotion, EASE } from '../lib/motion';
import SplitText from './reactbits/SplitText';
import { CareerChart } from './CareerChart';

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // The one orchestrated moment: copy rises in, then the career bars grow left to right.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from('.hero-rise', { opacity: 0, y: 18, duration: 0.7, stagger: 0.1 }, 0.05).from(
        '.bar',
        { scaleY: 0, duration: 0.8, stagger: 0.15, transformOrigin: 'bottom' },
        0.45,
      );
    },
    { scope: ref },
  );

  return (
    <section className="hero" ref={ref}>
      <div className="wrap hero-grid">
        <div>
          <h1 aria-label="Lending products by day. A builder’s lab by night.">
            <SplitText
              tag="span"
              text="Lending products by day."
              textAlign="left"
              trigger="load"
              delay={22}
              duration={0.9}
            />
            <br />
            <SplitText
              tag="span"
              text="A builder’s lab by night."
              textAlign="left"
              trigger="load"
              delay={22}
              duration={0.9}
            />
          </h1>
          <p className="lede hero-rise">
            I’m <strong>Koustav Kundu</strong>, a Product Manager in ICICI Bank’s Business Loans Group in Mumbai, running
            renewals and digital lending journeys. After hours, I automate whatever repeats twice: with{' '}
            <strong>Python</strong>, a <strong>Raspberry Pi</strong>, and a healthy respect for markets.
          </p>
          <div className="cta-row hero-rise">
            <a className="btn btn--solid" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <a className="btn btn--ghost" href={LINKEDIN} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
          <p className="label hero-micro hero-rise">Open to conversations on product, credit &amp; automation.</p>
        </div>
        <CareerChart />
      </div>
    </section>
  );
}
