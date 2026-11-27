import { useEffect, useState } from 'react';
import { CAL_LINK, EMAIL, LINKEDIN } from '../data';

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns: Record<string, CalFn>;
  q: unknown[];
};
declare global {
  interface Window {
    Cal?: CalFn;
  }
}

/** Cal.com's official embed loader, unchanged in behaviour from the old inline <script>. */
function loadCal() {
  if (window.Cal?.ns?.booking) return;
  /* eslint-disable */
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal; const ar = arguments;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
      if (ar[0] === L) {
        const api: any = function () { p(api, arguments); };
        const namespace = ar[1]; api.q = api.q || [];
        if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]); }
        else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
  /* eslint-enable */
  window.Cal!('init', 'booking', { origin: 'https://app.cal.com' });
  window.Cal!.ns.booking('ui', { hideEventTypeDetails: false, layout: 'month_view' });
}

export function Contact() {
  useEffect(loadCal, []);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact reveal">
          <h2>Say hello.</h2>
          <p>
            For roles, product problems, market talk or a good automation idea, write to me. I read every message and
            reply as soon as I can.
          </p>
          <div className="mail-row">
            <a className="mail-big" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <button className={`btn btn--ghost copy${copied ? ' is-done' : ''}`} type="button" onClick={copy} aria-live="polite">
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>
          <div className="cta-row">
            <a className="btn btn--solid" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <button className="btn btn--ghost" type="button" data-cal-namespace="booking" data-cal-link={CAL_LINK} data-cal-config='{"layout":"month_view"}'>
              Book a call
            </button>
            <a className="btn btn--ghost" href={LINKEDIN} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
          <p className="contact-foot">Mumbai, India. Calls on weekdays or weekends, your pick.</p>
        </div>
      </div>
    </section>
  );
}
