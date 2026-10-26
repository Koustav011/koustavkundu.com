import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion, EASE } from './lib/motion';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { Work } from './components/Work';
import { Lab } from './components/Lab';
import { Toolkit } from './components/Toolkit';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const main = useRef<HTMLElement>(null);

  // Quiet reveals for everything marked .reveal — batched so neighbours stagger together.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.set('.reveal', { opacity: 0, y: 22 });
      ScrollTrigger.batch('.reveal', {
        start: 'top 92%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: EASE, stagger: 0.08, overwrite: true }),
      });
    },
    { scope: main },
  );

  return (
    <SmoothScroll>
      <Header />
      <main ref={main}>
        <Hero />
        <Ticker />
        <About />
        <Work />
        <Lab />
        <Toolkit />
        <Education />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
