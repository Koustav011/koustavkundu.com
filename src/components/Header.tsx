import { useEffect, useState } from 'react';
import { NAV } from '../data';
import { useScrollTo } from './SmoothScroll';

function istTime() {
  return new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function Header() {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(istTime);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = window.setInterval(() => setTime(istTime()), 30_000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="wrap header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Koustav Kundu, back to top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(0);
            history.replaceState(null, '', location.pathname + location.search);
          }}
        >
          <span className="brand-mark" aria-hidden="true" />
          Koustav Kundu
        </a>
        <nav className="site-nav" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
                history.replaceState(null, '', `#${item.id}`);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <span className="clock" aria-hidden="true">
          Mumbai · {time} IST
        </span>
      </div>
    </header>
  );
}
