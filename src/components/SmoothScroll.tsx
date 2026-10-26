import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/motion';

const LenisContext = createContext<Lenis | null>(null);

/** Header height (64px) plus breathing room, matching the old `scroll-margin-top: 96px`. */
const ANCHOR_OFFSET = -96;

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const instance = new Lenis();
    instance.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    // Fonts change line heights; re-measure trigger positions once they land.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

/** Smoothly scroll to a section id (or the top). Falls back to native scrolling without Lenis. */
export function useScrollTo() {
  const lenis = useContext(LenisContext);
  return (target: string | 0) => {
    if (lenis) {
      lenis.scrollTo(target === 0 ? 0 : `#${target}`, { offset: target === 0 ? 0 : ANCHOR_OFFSET });
      return;
    }
    if (target === 0) window.scrollTo({ top: 0 });
    else document.getElementById(target)?.scrollIntoView();
  };
}
