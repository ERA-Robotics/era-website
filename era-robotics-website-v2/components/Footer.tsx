import Link from "next/link";
import Logo from "@/components/Logo";

const solutionLinks = [
  {
    label: "Commercial Robotics",
    href: "/solutions#commercial-robotics",
  },
  {
    label: "Deployment & Integration",
    href: "/solutions#deployment-integration",
  },
  {
    label: "Physical AI",
    href: "/solutions#physical-ai",
  },
  {
    label: "Edge Intelligence",
    href: "/solutions#edge-intelligence",
  },
  {
    label: "Computer Vision",
    href: "/solutions#computer-vision",
  },
];

const exploreLinks = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Deployments", href: "/deployments" },
  { label: "Resources", href: "/resources" },
];

const companyLinks = [
  { label: "About ERA", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

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

        <nav className="footer-column" aria-label="Solutions">
          <h3>Solutions</h3>

          <Link href="/solutions">All Solutions</Link>

          {solutionLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Explore">
          <h3>Explore</h3>

          {exploreLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Company">
          <h3>Company</h3>

          {companyLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} ERA Robotics Pty Ltd.
        </span>

        <div className="footer-legal">
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
