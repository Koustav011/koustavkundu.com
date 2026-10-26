---
name: motion-web-stack
description: Use for any website, landing page, portfolio (koustavkundu.com) or web animation work — build motion with GSAP, smooth scroll with Lenis, and effects from React Bits by default.
---

# Motion web stack: GSAP + Lenis + React Bits

Default stack for every website, portfolio section, landing page or animated UI, unless the user asks for something else:
- **GSAP** for all animation (timelines, ScrollTrigger, SplitText). All GSAP plugins are free and ship inside the `gsap` package.
- **Lenis** for smooth scrolling, always synced to GSAP's ticker.
- **React Bits** (reactbits.dev) for ready-made text animations, backgrounds and animated components.

Don't ask the user whether to use this stack — just use it. Check the latest versions of `gsap` and `lenis` before pinning a version.

## Step 1 — Detect where the code runs

1. **React project** (package.json has `react`; Vite or Next.js) → follow "React projects".
2. **Plain HTML/CSS/JS site** (e.g. a static GitHub Pages site with no build step) → follow "Static sites".
3. **claude.ai artifact / quick preview** → follow "Artifacts".

The user's portfolio is koustavkundu.com, hosted on GitHub Pages with Hostinger DNS. Check the repo to see which case it is before writing code.

## React projects

Install:
```bash
npm install gsap @gsap/react lenis
```

React Bits components install through the shadcn CLI or jsrepo. Pick the variant matching the project: JS or TS, CSS or Tailwind (TW).
```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
# or
npx jsrepo@latest add https://reactbits.dev/r/BlurText-TS-TW
```
- If shadcn isn't initialised yet, run `npx shadcn@latest init` first.
- The component source lands in the repo, so edit it freely.
- If the CLI fails, copy the source from the component's page on reactbits.dev.

Smooth scroll provider, mounted once at the app root:
```jsx
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return children;
}
```

Animations in components always use the `useGSAP` hook, so cleanup is automatic:
```jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Section() {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.from('.card', {
      y: 40, opacity: 0, stagger: 0.1,
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    });
  }, { scope: ref });
  return <section ref={ref}>…</section>;
}
```

GitHub Pages deploy for Vite:
- Set `base` in vite.config: `'/'` for a custom domain like koustavkundu.com, `'/<repo>/'` otherwise.
- Keep the `CNAME` file in `public/`.
- Deploy `dist/` with a GitHub Actions Pages workflow.

## Static sites (no React)

React Bits components need React. Pick one of these, and tell the user which you chose:
- **(a) Default for small changes:** keep the site static and recreate the React Bits effect in vanilla JS + GSAP. For example, React Bits "SplitText" becomes GSAP SplitText. Note which React Bits component it was based on.
- **(b) For a bigger redesign:** migrate to Vite + React, then follow "React projects". Recommend this only when the user is redoing several sections.

Load from CDN and pin versions:
```html
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3/dist/lenis.css">
<script src="https://unpkg.com/lenis@1.3/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
</script>
```

## Artifacts (claude.ai previews)

- Load GSAP from cdnjs or jsdelivr and Lenis from unpkg or jsdelivr, as in the static setup above.
- React Bits can't be installed in an artifact. Recreate the component's effect inline and say which component it mirrors, so the user can install the real one in the site later.
- Use artifacts to preview a section before it goes into the repo.

## Rules for every build

- **Reduced motion:** respect `prefers-reduced-motion`. Skip Lenis and use instant or fade-only animations.
- **What to animate:** only `transform` and `opacity`. Avoid layout properties like `top`, `width` and `height`.
- **Nested scroll areas:** add `data-lenis-prevent` to scrollable modals, menus and code blocks.
- **Anchor links:** use `lenis.scrollTo('#id')` instead of a native jump.
- **Fonts and images:** call `ScrollTrigger.refresh()` after they load if positions shift.
- **Mobile:** test at 380px width. Keep heavy WebGL backgrounds, like some React Bits backgrounds, off on mobile or behind a reduced-motion check.
- **Restraint:** one hero moment, subtle reveals elsewhere, so the site doesn't feel overanimated.
- **Existing work:** keep the existing CSS career-waterfall hero unless the user asks to change it. Enhance it with GSAP rather than replacing it.
