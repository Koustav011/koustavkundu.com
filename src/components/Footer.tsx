export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span className="mono">© {new Date().getFullYear()} Koustav Kundu</span>
        <span className="mono">Built with React, GSAP &amp; Lenis. No trackers.</span>
      </div>
    </footer>
  );
}
