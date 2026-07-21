import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-cta shell">
        <div className="footer-cta-copy">
          <p className="kicker">START A CONVERSATION</p>

          <h2>Ready to explore robotics for your operation?</h2>

          <p>
            Talk with ERA Robotics about commercial robotics, deployment,
            integration and the pathway toward Physical AI.
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
            <span>Deployment &amp; Integration</span>
            <span>Physical AI</span>
          </div>

          <span className="footer-region">
            Australia &amp; New Zealand
          </span>
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>

          <Link href="/solutions">All Solutions</Link>

          <Link href="/solutions#commercial-robotics">
            Commercial Robotics
          </Link>

          <Link href="/solutions#deployment-integration">
            Deployment &amp; Integration
          </Link>

          <Link href="/solutions#physical-ai">
            Physical AI
          </Link>

          <Link href="/solutions#edge-intelligence">
            Edge Intelligence
          </Link>

          <Link href="/solutions#computer-vision">
            Computer Vision
          </Link>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <Link href="/about">About ERA</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/products">Products</Link>
          <Link href="/deployments">Deployments</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>

          <Link href="/resources">All Resources</Link>
          <Link href="/resources">Deployment Guides</Link>
          <Link href="/resources">Industry Insights</Link>
          <Link href="/resources">Physical AI</Link>
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
