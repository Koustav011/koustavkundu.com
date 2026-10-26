# koustavkundu.com

Personal portfolio, built with **Vite + React + TypeScript + Tailwind**, animated with **GSAP**, smooth-scrolled with **Lenis**, plus a **React Bits** SplitText headline.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Where things live

- `src/data.ts` — all the copy (jobs, projects, toolkit, education). Edit text here.
- `src/site.css` — the site's design tokens and styles (carried over from the original hand-built page).
- `src/components/` — one component per section. `reactbits/` holds React Bits components.
- `src/components/SmoothScroll.tsx` — Lenis, synced to GSAP ScrollTrigger.
- `public/CNAME` — keeps the custom domain.
- `.claude/skills/motion-web-stack/` — tells Claude Code to use this GSAP + Lenis + React Bits stack.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
