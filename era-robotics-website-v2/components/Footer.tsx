import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-cta shell">
        <p className="kicker">START A CONVERSATION</p>
        <h2>Ready to build the future?</h2>
        <p>
          Talk to ERA Robotics about commercial robotics, Physical AI,
          edge intelligence and enterprise automation.
        </p>
        <div className="button-row center">
          <Link href="/contact" className="pill pill-light">Talk to ERA</Link>
          <Link href="/solutions" className="pill pill-outline">Explore Solutions</Link>
        </div>
      </section>

      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Engineering intelligence for the physical world.</p>
          <span>Australia &amp; New Zealand</span>
        </div>
        <div>
          <h3>Solutions</h3>
          <Link href="/solutions">Commercial Robotics</Link>
          <Link href="/solutions#physical-ai">Physical AI</Link>
          <Link href="/solutions#edge-ai">Edge Computing</Link>
          <Link href="/solutions#integration">Integration Services</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Resources</h3>
          <Link href="/resources">Insights</Link>
          <span>Careers — coming soon</span>
          <span>Privacy Policy — coming soon</span>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 ERA Robotics Pty Ltd.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
