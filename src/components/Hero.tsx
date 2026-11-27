import { useRef } from 'react';
import { CAL_LINK, EMAIL } from '../data';
import { gsap, useGSAP, prefersReducedMotion, EASE } from '../lib/motion';
import SplitText from './reactbits/SplitText';
import { CareerChart } from './CareerChart';

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // The one orchestrated moment: the headline word by word, then the support copy, then the bars grow left to right.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from('.hero-rise', { opacity: 0, y: 12, duration: 0.6, stagger: 0.07 }, 0.4).from(
        '.bar',
        { scaleY: 0.04, duration: 0.7, stagger: { each: 0.12, ease: 'power1.in' }, transformOrigin: 'bottom' },
        0.65,
      );
    },
    { scope: ref },
  );

  const split = { tag: 'span' as const, textAlign: 'left' as const, trigger: 'load' as const, splitType: 'words' as const, delay: 55, duration: 0.7, ease: EASE, from: { opacity: 0, y: 28 } };

  return (
    <section className="hero" ref={ref}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 aria-label="Lending products by day. A builder’s lab by night.">
            <SplitText {...split} text="Lending products by day." to={{ opacity: 1, y: 0, delay: 0 }} />
            <br />
            <SplitText {...split} text="A builder’s lab by night." to={{ opacity: 1, y: 0, delay: 0.22 }} />
          </h1>
          <p className="lede hero-rise">
            I’m <strong>Koustav Kundu</strong>, a Product Manager in ICICI Bank’s Business Loans Group, Mumbai. I run
            renewals and digital lending journeys by day, and automate whatever repeats twice by night.
          </p>
          <div className="cta-row hero-rise">
            <a className="btn btn--solid" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <button className="btn btn--ghost" type="button" data-cal-namespace="booking" data-cal-link={CAL_LINK} data-cal-config='{"layout":"month_view"}'>
              Book a call
            </button>
          </div>
        </div>
        <CareerChart />
      </div>
    </section>
  );
}
