export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span className="label">© {new Date().getFullYear()} Koustav Kundu</span>
        <span className="label">Built with React, GSAP &amp; Lenis. No trackers.</span>
      </div>
    </footer>
  );
}
