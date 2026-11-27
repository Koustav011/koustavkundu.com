import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion, EASE } from './lib/motion';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Lab } from './components/Lab';
import { Toolkit } from './components/Toolkit';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const main = useRef<HTMLElement>(null);

  // Quiet reveals for everything marked .reveal: a short fade with a small lift, fired early,
  // so content is already settling by the time it is read. Batched so neighbours arrive together.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.set('.reveal', { opacity: 0, y: 8 });
      ScrollTrigger.batch('.reveal', {
        start: 'top 98%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.45, ease: EASE, stagger: 0.05, overwrite: true }),
      });
    },
    { scope: main },
  );

  return (
    <SmoothScroll>
      <Header />
      <main ref={main}>
        <Hero />
        <Work />
        <Lab />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
