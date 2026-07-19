import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-cta shell">
        <div className="footer-cta-copy">
          <p className="kicker">START A CONVERSATION</p>

          <h2>Ready to build intelligent operations?</h2>

          <p>
            Talk with ERA Robotics about commercial robotics, Physical AI,
            edge intelligence and enterprise automation.
          </p>
        </div>

        <div className="button-row center">
          <Link href="/contact" className="pill pill-light">
            Talk to ERA
          </Link>

          <Link href="/solutions" className="pill pill-outline">
            Explore Solutions
          </Link>
        </div>
      </section>

      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />

          <p>Engineering intelligence for the physical world.</p>

          <div className="footer-capabilities">
            <span>Commercial Robotics</span>
            <span>Physical AI</span>
            <span>Enterprise Integration</span>
          </div>

          <span className="footer-region">Australia &amp; New Zealand</span>
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>

          <Link href="/solutions">Commercial Robotics</Link>
          <Link href="/solutions#physical-ai">Physical AI</Link>
          <Link href="/solutions#edge-ai">Edge Computing</Link>
          <Link href="/solutions#integration">Integration Services</Link>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <Link href="/about">About ERA</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>

          <Link href="/resources">All Resources</Link>
          <Link href="/resources/deployment-guide">Deployment Guides</Link>
          <Link href="/resources/industry-brief">Industry Insights</Link>
          <Link href="/resources/physical-ai">Physical AI</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} ERA Robotics Pty Ltd.
        </span>

        <div className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>

          <a
            href="https://www.linkedin.com/company/erarobotics"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
